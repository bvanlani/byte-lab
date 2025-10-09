/* Component that links from the current page over to the news page. Fully complete GUI */

//Grabbing linking to be able to send between pages
import {Link} from 'react-router-dom';

//Returning the component
export default function HomeToNews(){
    return(
        <section className="home-to-news">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-light">
                            <h1>See What's Happening</h1> 
                            <h2 className="mb-3"><em>Explore our latest events, blog posts, and updates!</em></h2>
                            <Link className="btn btn-primary px-5 highlight" to="/news">Visit News</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}