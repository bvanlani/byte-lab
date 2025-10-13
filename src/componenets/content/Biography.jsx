/* All jsx files in the content section are basically just big HTML/text documents
This one is the biography with the portraits of everyone who is running byte Labs 
*/


//Grabbing the pictures
import BethanPortrait from '../../assets/BethanPortrait.png';
import ConnerPortrait from '../../assets/ConnerPortrait.JPG';
import CharlesPortrait from '../../assets/CharlesPortrait.JPG';
import DethanPortrait from '../../assets/DranePortrait.JPG';


//Returning the biography website.
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
                        <p className="text-light"><em>I have 4 years of CS, and am proficient in Web Development and Game Development. </em></p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={CharlesPortrait} alt="..." />
                        <h5 className="text-light">Ben V.</h5>
                        <p className="text-light"><em>Eight years of computer science, from building scratch games to learning multiple languages.</em></p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={ConnerPortrait} alt="..." />
                        <h5 className="text-light">Conner O.</h5>
                        <p className="text-light"><em>I have 5+ years of background. I have made my own games custom automation scripts and websites.</em></p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={DethanPortrait} alt="..." />
                        <h5 className="text-light">Ethan D.</h5>
                        <p className="text-light"><em>I started programming in 8th grade with HTML, and now I am proficient in over 7 different coding languages.</em></p>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        <img className="img-fluid rounded-circle mb-3" src={CharlesPortrait} alt="..." />
                        <h5 className="text-light">Charles D.</h5>
                        <p className="text-light"><em>Having started coding in the 6th grade, I have gained proficient experiences in multiple languages.</em></p>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </section>
    )
}