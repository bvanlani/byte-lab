 
 export default function ColorLegend(){

    return (
        <>
            {/* COLOR LEGEND */}
                <div className="container text-start p-4 mb-5 bg-dark text-light rounded shadow">
                    <h2 className="text-center mb-4">Understanding the Colors in the Code Blocks</h2>
                    <p>The Monaco Editor uses syntax highlighting to make your code easier to read. Each color represents a different part of Python syntax:</p>
                    <div className="row text-center mt-4">
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#569CD6' }}></span>
                            <p className="mt-2 mb-0">Keywords<br /><small>(<code>if</code>, <code>for</code>, <code>def</code>)</small></p>
                        </div>
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#DCDCAA' }}></span>
                            <p className="mt-2 mb-0">Variables &amp; Names</p>
                        </div>
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#CE9178' }}></span>
                            <p className="mt-2 mb-0">Strings<br /><small>("Hello")</small></p>
                        </div>
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#B5CEA8' }}></span>
                            <p className="mt-2 mb-0">Numbers &amp; Booleans</p>
                        </div>
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#6A9955' }}></span>
                            <p className="mt-2 mb-0">Comments<br /><small>(# notes)</small></p>
                        </div>
                        <div className="col-md-2 col-6 mb-3">
                            <span className="d-inline-block rounded p-2" style={{ backgroundColor: '#9CDCFE' }}></span>
                            <p className="mt-2 mb-0">Functions &amp; Calls</p>
                        </div>
                    </div>
                </div>
        </>
    );
}