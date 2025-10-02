import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className="masthead mainPage-masthead text-white text-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-light">
                            <h1>Welcome to Byte Lab!</h1> 
                            <h2 className="mb-3"><em>Inpsire, Innovate, Impact</em></h2>
                            <Link className="btn btn-primary px-5" to="/the-lab">The Lab</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}