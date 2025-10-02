import candid1 from '../assets/testimonials-1.jpg';
import candid2 from '../assets/testimonials-2.jpg';
import candid3 from '../assets/testimonials-3.jpg';

export default function Biography(){
    return(
        <section className="testimonials text-center bg-dark">
            <div className="container">
                <h2 className="mb-5 text-light">Meet the Team!</h2>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                            <h5 className="text-light">Sarah W.</h5>
                            <p className="font-weight-light mb-0 text-light">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={candid1} alt="..." />
                            <h5 className="text-light">Margaret E.</h5>
                            <p className="font-weight-light mb-0 text-light">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={candid2} alt="..." />
                            <h5 className="text-light">Fred S.</h5>
                            <p className="font-weight-light mb-0 text-light">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                            <h5 className="text-light">Sarah W.</h5>
                            <p className="font-weight-light mb-0 text-light">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                            <h5 className="text-light">Sarah W.</h5>
                            <p className="font-weight-light mb-0 text-light">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </section>
    )
}