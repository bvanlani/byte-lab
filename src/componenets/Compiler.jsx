//WASM based python compiler component that allows for the devlopment of python code 
//locally in a web browser. Built on the pyodide project and the monaco editor.

//Importing the needing extensions. Need react the monaco editor and the pyodide
import React, { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { loadPyodide } from "pyodide";

 export default function Compiler(){
      //Getting some constants to update it. Getting the editor and the pyodide to run code
  const editorContent = useRef(null);
  const pyodideRef = useRef(null);
  const [output, setOutput] = React.useState("This is where the output will show!");

  //Loading pyodide when the component is mounted
  useEffect(() => {
    // Loading in the pyodide instance
      async function loadPyodideInstance() {
      pyodideRef.current = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/" });
    }
    loadPyodideInstance();
    }, []);

  //Function to check if the editor is mounted and updated
  function handleEditorDidMount(editor, monaco) {
    editorContent.current = editor;

    // Prevent Ctrl+V and right-click paste
    editor.onKeyDown((e) => {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === monaco.KeyCode.KeyV) {
        e.preventDefault();
        alert("Be sure to write your own code!");
      }
    });

    // Prevent mouse-based pasting (e.g., right-click → paste)
    const domNode = editor.getDomNode();
    if (domNode) {
      domNode.addEventListener("paste", (e) => {
        e.preventDefault();
        alert("Be sure to write your own code!");
      });
    }
  }

  //Actually running the python code
  async function runPythonCode() {
    //Checking for if the pyodide is loaded.
    if(!pyodideRef.current){
      setOutput("That's awkward give me a sec and try again.");
      return;
    }else{
      setOutput("Compiling...");
    }
    //Getting the user code from the editor
    const userCode = editorContent.current.getValue();
//Glourious python absolutely runing any astecic code on the website I might move it to a component jail folder.
//But also need it here cause it loads in extensions to generate results as a string.
const pythonCode = `
import sys
import io

sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

${userCode}
`;

 //Now we are really reading in the code and running it I promise
  try{
    //Have the python result for later... need to add in a GUI and not sure how yet
    const result = await pyodideRef.current.runPythonAsync(pythonCode);
    //Capturing the output and errors to show the user.
    const stdout = await pyodideRef.current.runPythonAsync("sys.stdout.getvalue()");
    const stderr = await pyodideRef.current.runPythonAsync("sys.stderr.getvalue()");

    //Combinig everything and outputting it unless there is nothing then sending a blank string to keep zuc happy
    setOutput((stdout + stderr) || "So empty here"); // update React state
  } catch(err){
    //Returning error if messed up
    try{
        //Getting the output from the error. Formatting it to be easier for user to read.

        //Getting the ful error message
        const stderr = await pyodideRef.current.runPythonAsync("sys.stderr.getvalue()");
        //Finding where the last error is and slicing to get a more compact message
        let last_line = stderr.lastIndexOf("Error");
        last_line = stderr.slice(last_line + 6, stderr.length);
        //Simplifying the error message to be more user friendly and outputting it
        let simplified = "\n---\n ERROR: " + last_line + "\n";
        setOutput(("Uh oh looks like you have an error! " + simplified));
    }
    catch{
        //Broad Error catching.
        setOutput("Something went wrong, please try again.");
    }
  }
}

    return( 
    //Defing the layout of the compiler component.
    <section className ="d-flex flex-column">
            <div className="container">
                <div className="row">
                    <div className="rounded row-12 col-12 text-light" style={{ minHeight: 300 }}>
                    <Editor
                        height="400px" 
                        defaultLanguage="python"
                        defaultValue="#Start coding here!"
                        theme="vs-dark"
                        fontFamily="'Fira Code', monospace"
                        onMount={handleEditorDidMount}
                        options={{
                                minimap: { enabled: true},
                                fontSize: 16,
                                fontFamily: "Fira Code, monospace",
                                lineNumbers: "on",
                                scrollBeyondLastLine: false,
                                roundedSelection: true,
                                padding: { top: 10, bottom: 10, left: 10, right: 30 },
                                scrollbar: {
                                 vertical: "visible",
                                horizontal: "auto",
                                useShadows: false,
                                verticalScrollbarSize: 12,
                                horizontalScrollbarSize: 12,
                        },
                         
                        }}
                        />
                      <button className="btn btn-primary mt-3 mb-3" onClick={() => runPythonCode()}>Run Code</button>
                    </div>
                    <div className="rounded row-12 col-12 text-light bg-dark">
                        <p>{output}</p>
                    </div>
                </div>
            </div>
        </section>)
 }

    async function runPythonCode(code) {
  let pyodide = null;
  try{
    

    const result = await pyodide.runPythonAsync(code);
    console.log(result);
  } catch(err){
    console.log(err);
  }
}
  