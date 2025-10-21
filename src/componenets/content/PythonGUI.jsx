
export default function PythonGUI({ position })   {
    return(
<div className="rounded overflow-hidden shadow-sm col-4 bg-dark" style={{ minHeight: 300 }}>
              <div className="m-3 bg-light rounded" style={{
                width: '90%',
                height: '90%',
                boxSizing: 'border-box',
                position: 'relative',
                '--x': '50px',
                '--y': '50px',
              }}
            >
    <div
      style={{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
        position: 'relative',
      }}
    >
      <i
        className="bi bi-robot"
        style={{
          color: 'black',
          position: 'absolute',
          left: 'var(--x)',
          top: 'var(--y)',
          fontSize: '2rem',
        }}
      ></i>
    </div>
      </div>
    </div>
    );
}
