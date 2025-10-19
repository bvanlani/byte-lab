//The compiler hook essentially connects the compiler worker to the compiler
//Having this as an intermediate file allows for true parrellel loading of components.


//Importing the neccessary react components
import React from "react";
import {useState, useRef, useEffect} from 'react';

//Returning the compiler hook component with all of its functions.
export default function CompilerHook(){
      const[isReady, setIsReady] = useState(false);
      const workerRef = useRef(null);
      const [output, setOutput] = React.useState("This is where the output will show!");

//Loading pyodide when the component is mounted
  useEffect(() => {
    // Loading in the pyodide instance
    const worker = new Worker(new URL("./CompilerWorker.js", import.meta.url));
    workerRef.current = worker;

    //handling return messages from the worker.
    worker.onmessage = (msg) => {
      //Preapring what type of result to return
      const{type, result}= msg.data;
      //For ready updating the isReady to let program know pyodide is loaded
       if(type === "ready"){
          setIsReady(true);
      } else if(type === "result"){ //Otherwise returning the result from the program.
        setOutput(result);
      } if (type === "prompt"){
        const userInput = prompt(msg.data.prompt);
        worker.postMessage({type: "prompt", input: userInput});
      }
    };
    worker.postMessage({type: "load"}); //Once the worker is made posting the message to make it load.
  }, []);

    //Running the python code.
    const runPython = (code) => {
      //Checking if the worker exists
        if(workerRef.current){
            //Tellling the worker to run the code.
            workerRef.current.postMessage({type: "run", code});
        } else{
            //If not ready updating output to let the user know(Should never run. Locked on button in compiler)
            workerRef.current.postMessage("Hold up! were not quite ready for you to run your program yet.")
        }
    }
    //Updating the results from the hook running.
    return{runPython, output, isReady, prompt}
}
