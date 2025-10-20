/* Component that links from the current page over to the news page. Fully complete GUI */

//Grabbing linking to be able to send between pages
import {Link} from 'react-router-dom';

//Returning the component
export default function HomeToNews(){
    return(
<section className="home-to-news py-5 bg-dark text-light">
  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h1 className="fw-bolder mb-3 text-white">
          See What's Happening
        </h1>
        <p className="fs-5 text-light-emphasis mb-4">
          Explore our latest events, blog posts, and updates.
        </p>
        <Link
          to="/news"
          className="btn btn-light btn-lg fw-semibold px-5 py-2 rounded-1 hover-invert"
        >
          Visit News
        </Link>
      </div>
    </div>
  </div>
</section>


    )
}