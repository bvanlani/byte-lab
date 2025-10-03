import Editor from '@monaco-editor/react';

export default function Compiler() {
  return (
    <section className="vh-100 d-flex flex-column">
      <div className="container bg-dark text-light text-center py-4">
        <h1>The Lab</h1>
      </div>

      <div className="container flex-grow-1 d-flex bg-dark">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            defaultValue="// Start coding here..."
            theme="vs-dark"
          />
      </div>
    </section>
  );
}

