import showcase1 from '../assets/bg-showcase-1.jpg'
import showcase2 from '../assets/bg-showcase-2.jpg'
import showcase3 from '../assets/bg-showcase-3.jpg' 
import Editor from '@monaco-editor/react'

export default function TheLabTop(){
    return(
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0 m-3">
                    <div className="rounded overflow-hidden col-lg-6 col-md-8 m-3" style={{ paddingRight: "50px"}}>
                    <Editor
                        defaultLanguage="python"
                        defaultValue="# Write your code here"
                        theme="vs-dark"
                        className="code-editor"
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
                    <div className="col-lg-5 col-md8 m-3 text-white showcase-img rounded" style={{ backgroundImage: `url(${showcase1})`}} ></div>
                </div>
            </div>
        </section>
    )
}