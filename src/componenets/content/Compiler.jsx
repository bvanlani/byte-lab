//WASM based python compiler component that allows for the devlopment of python code 
//locally in a web browser. Built on the pyodide project and the monaco editor.

//Importing the needing extensions. Need react the monaco editor and the pyodide
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import CompilerHook from "../effects/CompilerHook";
import SavePopup from "../popups/SavePopup.jsx";
import OutputBox from "../content/OutputBox.jsx";
import UploadPopup from "../popups/UploadPopup.jsx";
import PythonGUI from "../content/PythonGUI.jsx";

export default function Compiler() {
  //Getting some constants to update it. Getting the editor and the pyodide to run code
  const editorContent = useRef(null);
  const { runPython, output, isReady, prompt, position} = CompilerHook();
  const [savePopup, setSavePopup] = useState(false);
  const [uploadPopup, setUploadPopup] = useState(false);

  //Handling the prompt from the compiler worker through the hook.
  CompilerHook.prompt = () => {
    //Getting user input via window prompt
    const userInput = window.prompt("Input is required by the program: ");
    //Sending back to the hook to send to the worker
    prompt.postMessage({type: "prompt", input: userInput});
  }

  //Toggles Save popup
  function toggleSaveCodePopup() {
    setSavePopup(!savePopup);
  }
  //Toggles the upload popup
  function toggleUploadCodePopup() {
    setUploadPopup(!uploadPopup);
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

  //When the worker is needed handling the code running
  const handleRun = () => {
    //Grabbing user code and adding the extra code to return.
    let userCode = editorContent.current.getValue();
    //Replacing the input calls to use the async version required by the WASM python
    userCode = userCode.replaceAll("input(", "await input(");
    //Combining the user code with the extra packages that are needed for the pyodide environement.
    const pythonCode = `
#Grabbing the modules we need to run correctly
import sys
import io
import js
import asyncio
import time
#defining a gloabl py_future variable to hold future input values
py_future = None

# Redirect stdout and stderr to capture output
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()


#Asynchronous input function to work with js prompt
async def input(prompt=''):
    return await js.workerPrompt(prompt)

def moveForward():
    js.moveForward()

def turn(direction):
    js.turn(direction)

#User code starts here
${userCode}
`;
  //Running the python code via the compiler hook
  runPython(pythonCode);
  console.log(position);
  };

  //Saving the users code
  function saveCode(filename) {
    //Getting the user code from the editor
    const userCode = editorContent.current.getValue();
    const KEY = "===вYTE_LAвS_KEY===";
    const savedCode = KEY + "\n" + userCode;
    //Decided against special naming or saving the special functions because they are importted anyways.
    saveStringAsFile(filename, savedCode);
  }

  //Comuting the operation to actually save the file as a txt file.
  function saveStringAsFile(filename, content) {
    // Create a Blob with the content(Blobs are basically wrappers to hold your data while its exported)
    const fullFileName = filename + ".txt";
    const blob = new Blob([content], { type: "text/plain" });

    // Create a temporary link element(Basically a txt page)
    const link = document.createElement("a"); //creating a reference to link the object
    link.href = URL.createObjectURL(blob); //Giving a location to the blob to be able to download
    link.download = fullFileName; //Setting the filename

    //Triggering download without user input
    document.body.appendChild(link); //Adding link to the body
    link.click(); //Clicking the link to trigger download

    //Now that its downloaded cleaning everything up.
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  //Uploading the data
  function handleFileUpload(text) {
    //Getting target file
    const KEY = "===вYTE_LAвS_KEY===";
    // Check if it starts with the secret signature
    if (!text.startsWith(KEY)) {
      console.log("InaccurateKey");
      return;
    }
    //Removing the key from the code
    const code = text.replace(KEY + "\n", "");
    editorContent.current.setValue(code);
    toggleUploadCodePopup();
  }

  //Returning the compiler component
  return (
 <section className="py-4">
  <div className="container">
    <div className="row">
      <div className="col-12 text-light">
      <div className="row">
        <div className="rounded overflow-hidden shadow-sm col-8" style={{ minHeight: 300}}>
          <Editor
            height="400px"
            defaultLanguage="python"
            defaultValue="# This is where you make your own programs!"
            theme="vs-dark"
            fontFamily="'Fira Code', monospace"
            onMount={handleEditorDidMount}
            options={{
              fontSize: 16,
              lineNumbers: "on",
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                scrollbarWidth: 5,
                arrowSize: 10
              },
              roundedSelection: true,
              useShadows: false,
            }}
          />
        </div>
        <PythonGUI position={position}></PythonGUI>

        </div>
        <div>
          {!isReady && <p className="text-warning mt-2">Loading Python environment, please wait...</p>}
        </div>

        {/* Button group */}
        <div className="d-flex flex-wrap justify-content-center gap-3 my-3">
          <button className="btn btn-primary" disabled={!isReady} onClick={handleRun}>
            Run Code
          </button>
          <button className="btn btn-outline-light" onClick={toggleSaveCodePopup}>
            Save Code
          </button>
          <button className="btn btn-outline-light" onClick={toggleUploadCodePopup}>
            Upload Code
          </button>
        </div>

        {/* Output section */}
        <div className="mt-4">
          <OutputBox content={output} />
        </div>

        {/* Popups */}
        <SavePopup show={savePopup} onClose={() => setSavePopup(false)} onSave={saveCode} />
        <UploadPopup show={uploadPopup} onClose={() => setUploadPopup(false)} onUpload={handleFileUpload} />
      </div>
    </div>
  </div>
</section>
  );
}
