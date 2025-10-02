import BethanPortrait from '../assets/BethanPortrait.png';
import candid2 from '../assets/testimonials-2.jpg';
import candid3 from '../assets/testimonials-3.jpg';
//import candid4 from '../assets/testimonials-4.jpg';
//import candid5 from '../assets/testimonials-5.jpg';

export default function Biography(){
    return(
        <section className="testimonials text-center bg-dark">
            <h2 className="mb-5 text-light">Meet the Team!</h2>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={BethanPortrait} alt="..." />
                        <h5 className="text-light">Ethan B.</h5>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                        <h5 className="text-light">Ben V.</h5>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                        <h5 className="text-light">Conner O.</h5>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                        <h5 className="text-light">Ethan D.</h5>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={candid3} alt="..." />
                        <h5 className="text-light mb-0">Charles D.</h5>
                        <p className="text-light"><em>Senior</em></p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </section>
    )
}