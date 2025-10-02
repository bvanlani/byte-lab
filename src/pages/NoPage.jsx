import Nav from '../componenets/Nav.jsx'
import Footer from '../componenets/Footer.jsx'
export default function NoPage(){
    return(
        <>
            <Nav />
            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-light">
                                <h1 className="mb-5">404 - Page Not Found</h1> 
                                <h3>We couldn't find anything at this url. If you believe this is an error, please contact support.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}