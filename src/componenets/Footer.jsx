export default function Footer(){
    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><Link to="/">Home</Link></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><Link to="/contact">Contact</Link></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><Link to="/terms">Terms of Use</Link></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Byte Lab 2025. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}