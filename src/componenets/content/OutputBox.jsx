
export default function OutputBox({content}){
    return(<>
    <div className="p-3 bg-dark text-light rounded font-monospace"     style={{height: '150px', overflowY: 'hidden', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'}}>
    <p>Console Output:</p>
    <pre  style={{
        whiteSpace: 'pre-line', // <-- preserves newlines
      }}>{content}</pre>
    </div>
    </>
    );

}