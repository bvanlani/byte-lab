import showcase1 from '../assets/bg-showcase-1.jpg'
import showcase2 from '../assets/bg-showcase-2.jpg'
import showcase3 from '../assets/bg-showcase-3.jpg' 
import Editor from '@monaco-editor/react'

export default function TheLabTop(){
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="rounded col-6 text-light">
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
                    <div className="col-6 text-light showcase-img rounded" style={{ backgroundImage: `url(${showcase1})`}} ></div>
                </div>
            </div>
        </section>
    )
}