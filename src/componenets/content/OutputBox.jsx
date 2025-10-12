

export default function OutputBox({content}){
    return(<>
    <div className="p-3 bg-dark-secondary text-light rounded font-monospace"     style={{height: '150px', overflowY: 'hidden', boxShadow: 'inset 0 0 10px 0 #000'}}>
    <p>Console Output:</p>
    <p  style={{
        whiteSpace: 'pre-line', // <-- preserves newlines
      }}>{content}</p>
    </div>
    </>
    );

}