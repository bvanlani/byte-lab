//WASM based python compiler component that allows for the devlopment of python code 
//locally in a web browser. Built on the pyodide project and the monaco editor.

//Importing the needing extensions. Need react the monaco editor and the pyodide
import React, { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { loadPyodide } from "pyodide";
import CompilerHook from "../effects/CompilerHook";

 export default function Compiler(){
  //Getting some constants to update it. Getting the editor and the pyodide to run code
  const editorContent = useRef(null);
  const [fileName, setFileName] = React.useState("");
  const{runPython, output, isReady} = CompilerHook();

  //When the worker is needed handling the code running
  const handleRun = () => {
    //Grabbing user code and adding the extra code to return.
    const userCode = editorContent.current.getValue();
    const pythonCode = `
import sys
import io

sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

${userCode}
`;
    runPython(pythonCode);
  }

  //Runs once the editor is loaded. Prevent pasting and updates the editor
  function handleEditorDidMount(editor, monaco) {
    editorContent.current = editor;
    // Prevent mouse-based pasting
    const domNode = editor.getDomNode();
    // Prevent Ctrl+V and right-click paste
    editor.onKeyDown((e) => {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === monaco.KeyCode.KeyV) {
        e.preventDefault();
        alert("Pasting is disabled");
      }
    });
    //Prevnting the pasting via right click.
    if (domNode) {
      domNode.addEventListener("paste", (e) => {
        e.preventDefault();
        alert("Pasting is disabled");
      });
    }
  }

//Saving the users code
function saveCode(){
    //Getting the user code from the editor
    const userCode = editorContent.current.getValue();
    //Decided against special naming or saving the special functions because they are importted anyways.
    saveStringAsFile("yourProgram", userCode)
}

//Comuting the operation to actually save the file as a txt file.
function saveStringAsFile(filename, content) {
  // Create a Blob with the content(Blobs are basically wrappers to hold your data while its exported)
  const blob = new Blob([content], { type: "text/plain" });

  // Create a temporary link element(Basically a txt page)
  const link = document.createElement("a"); //creating a reference to link our object to
  link.href = URL.createObjectURL(blob); //Giving a location to our new blob and linking it
  link.download = filename;              //Setting the filename

  //Triggering download without user input
  document.body.appendChild(link); //Automatically clicking button for the user.
  link.click();

  //Now that its downloaded cleaning everything up.
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

//Returning the compiler component
    return( 
    //Defing the layout of the compiler component.
    <section className ="d-flex flex-column">
            <div className="container">
                <div className="row">
                    <div className="rounded row-12 col-12 text-light" style={{ minHeight: 300 }}>
                    {/*This is the code editor where user modifes code.*/}
                    <Editor 
                        height = "400px"
                        defaultLanguage="python"
                        defaultValue="#This is where you make your own programs!"
                        theme="vs-dark"
                        fontFamily="'Fira Code', monospace"
                        onMount={handleEditorDidMount}
                        options={{
                                minimap: { enabled: true},
                                fontSize: 16,
                                lineNumbers: "on",
                                scrollBeyondLastLine: false,
                                roundedSelection: true,
                                useShadows: false
                        }}
                        />
                      {/*The bottom buttons.*/}
                      <button className="btn btn-primary mt-3 mb-3" disabled = {!isReady} onClick={handleRun}>Run Code</button>
                      <button className="btn btn-primary m-3" onClick={saveCode}>Download</button>
                    </div>
                    <div className="text-light bg-dark" style={{ minHeight: "30vh" }}>
                        <pre>{output}</pre>
                    </div>
                </div>
            </div>
        </section>
    )
 }