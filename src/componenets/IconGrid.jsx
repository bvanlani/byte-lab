export default function IconGrid(){
    return(
        <section className="features-icons bg-dark text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-laptop m-auto text-primary"></i></div>
                            <h3 className="text-light">Learn to Program</h3>
                            <p className="lead mb-0 text-light">Anyone can start programming—even with zero experience! We’ll be right there to guide you every step of the way.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-people m-auto text-primary"></i></div>
                            <h3 className="text-light">Work with others</h3>
                            <p className="lead mb-0 text-light">Learn to work in groups and accomplish larger goals. Delegate, problem solve, and collaborate effectively.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className="bi-cpu m-auto text-primary"></i></div>
                            <h3 className="text-light">Pre-Built Equipment</h3>
                            <p className="lead mb-0 text-light">We give you everything you need to get started! We will provide you with the necessary equipment to start immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}