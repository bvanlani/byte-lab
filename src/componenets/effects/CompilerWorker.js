
//Runs when the worker recieves a message. Cannot run async for some reason unless its an annonumous function
self.onmessage = async (evt) => {
  //Grabbing the data from the request
  const{type, code} = evt.data;

  //Function to handle prompting the user for input
self.workerPrompt = async function(prompt) {
  return new Promise((resolve) => {
    const handler = (evt) => {
      if (evt.data.type === "prompt") {
        console.log(evt.data.input);
        resolve(evt.data.input);
        self.removeEventListener("message", handler);
      }
    };
    self.addEventListener("message", handler);
    self.postMessage({ type: "prompt", prompt });
  });
};

self.moveForward = function(){
    //Post message to main thread to move robot forward
    self.postMessage({type: "move"});
}

self.turn = function(direction){
    //Post message to main thread to turn robot
    self.postMessage({type: "turn", direction: direction});
}

self.reset = function(){
    //Post message to main thread to reset robot
    self.postMessage({type: "reset"});
}


  //Loading the pyodide instance when that is paylod type.
  if (type === "load") {
    //Grabbing the scripts and updating self.pyodide != null.
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.28.3/full/pyodide.js");
    self.pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/",
    });
    //Returning that the pyodide is ready to enable compiling
    self.postMessage({ type: "ready" });
    //Exiting program
    return;
  } else if (type === "run"){ 
//Now we are really reading in the code and running it I promise
  // Start the Python code, but handle input asynchronously
  try{

    //Have the python result for later... need to add in a GUI and not sure how yet
    const result = await self.pyodide.runPythonAsync(code);
    //Capturing the output and errors to show the user.
    const stdout = await self.pyodide.runPythonAsync("sys.stdout.getvalue()");
    //Combinig everything and outputting it unless there is nothing then sending a blank string to keep zuc happy
    self.postMessage({ type: "result", result: stdout || "So empty here" });
  }catch(err){
    try{
        //Getting the full error message
        const stderr = await self.pyodide.runPythonAsync("sys.stderr.getvalue()");
        console.log(stderr);
        //Finding where the last error is and slicing to get a more compact message
        let last_line = stderr.lastIndexOf("Error");
        last_line = stderr.slice(last_line + 6, stderr.length);
        //Simplifying the error message to be more user friendly and outputting it
        let simplified = "\n---\n ERROR: " + last_line + "\n";
        self.postMessage({type: "result", result: "Uh oh looks like you have an error! " + simplified});
    }
    catch(err){
        //Broad Error catching.
        self.postMessage({type: "result", result: "Something went wrong, please try again."});
    }
    }
  }
  return; 
}
  //Now we are really reading in the code and running it I promise
  // Start the Python code, but handle input asynchronously
  /*try{

    //Have the python result for later... need to add in a GUI and not sure how yet
    const result = await self.pyodide.runPythonAsync(code);
    //Capturing the output and errors to show the user.
    const stdout = await self.pyodide.runPythonAsync("sys.stdout.getvalue()");
    //Combinig everything and outputting it unless there is nothing then sending a blank string to keep zuc happy
    self.postMessage({ type: "result", result: stdout || "So empty here" });
  }catch(err){
    try{
        //Getting the full error message
        const stderr = await self.pyodide.runPythonAsync("sys.stderr.getvalue()");
        console.log(stderr);
        //Finding where the last error is and slicing to get a more compact message
        let last_line = stderr.lastIndexOf("Error");
        last_line = stderr.slice(last_line + 6, stderr.length);
        //Simplifying the error message to be more user friendly and outputting it
        let simplified = "\n---\n ERROR: " + last_line + "\n";
        self.postMessage({type: "result", result: "Uh oh looks like you have an error! " + simplified});
    }
    catch(err){
        //Broad Error catching.
        self.postMessage({type: "result", result: "Something went wrong, please try again."});
    }
    }
  }*/ 
