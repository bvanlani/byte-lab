//WASM based python compiler component that allows for the devlopment of python code 
//locally in a web browser. Built on the pyodide project and the monaco editor.

//Importing the needing extensions. Need react the monaco editor and the pyodide
import React, { useEffect, useRef, useState} from "react";
import { Editor } from "@monaco-editor/react";
import { loadPyodide } from "pyodide";
import CompilerHook from "../effects/CompilerHook";

 export default function Compiler(){
  //Getting some constants to update it. Getting the editor and the pyodide to run code
  const editorContent = useRef(null);
  const [fileName, setFileName] = React.useState("");
  const{runPython, output, isReady} = CompilerHook();
  const[savePopup, setSavePopup] = useState(false);
  const[uploadPopup, setUploadPopup] = useState(false);
  const fileInputRef = useRef(null);


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
function saveCode(filename){
    //Getting the user code from the editor
    const userCode = editorContent.current.getValue();
    const KEY = "===вYTE_LAвS_KEY===";
    const savedCode = KEY + '\n' + userCode;
    //Decided against special naming or saving the special functions because they are importted anyways.
    saveStringAsFile(filename,savedCode)
}

//Showing save popup
function toggleSaveCodePopup(){
  setSavePopup(!savePopup);
}

//Showing the upload popup
function toggleUploadCodePopup(){
  setUploadPopup(!uploadPopup);
}

//Comuting the operation to actually save the file as a txt file.
function saveStringAsFile(filename, content) {
  // Create a Blob with the content(Blobs are basically wrappers to hold your data while its exported)
  const fullFileName = filename + ".txt";
  const blob = new Blob([content], { type: "text/plain" });

  // Create a temporary link element(Basically a txt page)
  const link = document.createElement("a"); //creating a reference to link our object to
  link.href = URL.createObjectURL(blob); //Giving a location to our new blob and linking it
  link.download = fullFileName;              //Setting the filename

  //Triggering download without user input
  document.body.appendChild(link); //Automatically clicking button for the user.
  link.click();

  //Now that its downloaded cleaning everything up.
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}


  //Uploading the data
  function handleFileUpload(e) {
    //Getting target file
    const KEY = "===вYTE_LAвS_KEY===";
    const file = e.target.files[0];
    //Error checking
    if (!file){
      console.log("The file is not pushing here correctly")
       return;
    }
    //Creating file reader to read through the text
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;

      // Check if it starts with the secret signature
      if (!text.startsWith(KEY)) {
        console.log("InaccurateKey")
        return;
      }
      
      // Strip secret line and send the code back to your editor or Pyodide
      const code = text.replace(KEY + "\n", "");
      editorContent.current.setValue(code); // You can use setEditorContent(code)
    };
    reader.readAsText(file);
    toggleUploadCodePopup();

    
  return (
    <input
      type="file"
      accept=".txt"
      onChange={handleFileUpload}
      className="form-control text-light bg-dark"
    />
  );
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
                                useShadows: false,
                                scrollbar:{
                                    alwaysConsumeMouseWheel: false
                                }
                        }}
                        />
                      {/*The bottom buttons.*/}
                      <button className="btn btn-primary m-3" disabled = {!isReady} onClick={handleRun}>Run Code</button>
                      <button className="btn btn-primary m-3" onClick={toggleSaveCodePopup}>Download</button>
                      <button className="btn btn-primary m-3" onClick={toggleUploadCodePopup}>Upload</button>
                      
                      {savePopup && (
                      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}>
                        <div className="bg-dark text-light rounded p-4 shadow" style={{ width: "400px" }}>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Save File</h5>
                          </div>
                          <input
                            type="text"
                            className="form-control mb-3 bg-secondary text-light border-0"
                            placeholder="Enter file name"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                          />
                          <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-secondary" onClick={toggleSaveCodePopup}>
                              Cancel
                          </button>
                          <button
                            className="btn btn-success"
                              onClick={() => {
                                if (!fileName.trim()) {
                                  saveCode("myProgram");
                                } else {
                                  saveCode(fileName);
                                }
                                toggleSaveCodePopup();
                              }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {uploadPopup && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
        >
          <div
            className="bg-dark text-light rounded p-4 shadow"
            style={{ width: "400px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Upload File</h5>
            </div>

            <input
              type="file"
              accept=".txt"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="form-control mb-3 bg-secondary text-light border-0"
            />

            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-secondary" onClick={toggleUploadCodePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
                    </div>
                    <div className="text-light bg-dark" style={{ minHeight: "30vh" }}>
                        <pre>{output}</pre>
                    </div>
                </div>
            </div>
        </section>
    )
 }