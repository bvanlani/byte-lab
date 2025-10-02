export default function Footer(){
    return(
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><a href="#!">About</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Contact</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item">⋅</li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}