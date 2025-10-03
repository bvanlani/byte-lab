import React, { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";

export default function Compiler() {

  return (
    <section className="vh-100 d-flex flex-column">
      <div className="container bg-transparent text-light text-center py-4">
        <h1>The Lab</h1>
      </div>

      <section className ="vh-100 d-flex flex-column">
            <div className="container">
                <div className="row">
                    <div className="rounded row-12 col-12 text-light" style={{ minHeight: 300 }}>
                    <Editor
                        defaultLanguage="python"
                        defaultValue="# Write your code here"
                        theme="vs-dark"
                        fontFamily="'Fira Code', monospace"
                        options={{
                                minimap: { enabled: true},  // <-- this disables the preview
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
                    </div>
                    <div className="rounded row-12 col-12 text-light bg-dark">
                        <p>This is where the output will show</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
}
