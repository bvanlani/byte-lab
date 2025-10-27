import Editor from "@monaco-editor/react";

// A reusable component for consistent editor styling
export default function CodeBox({ code }){
    return (
        <div className="rounded bg-dark my-3" style={{ height: "200px" }}>
            <Editor
                defaultLanguage="python"
                value={code}
                theme="vs-dark"
                options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 15,
                scrollBeyondLastLine: false,
                lineNumbers: "on",
                roundedSelection: true,
                cursorStyle: "line",
                automaticLayout: true,
                scrollbar:{
                    alwaysConsumeMouseWheel: false
                }
                }}
            />
        </div>
    )
}