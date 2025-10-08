import headlineImg from "../assets/bg-showcase-3.jpg"
import authorImg from "../assets/testimonials-2.jpg"

import articles from "../data/articles.json"
const article = articles[articles.length - 1];

export default function Headliner(){
    return(
        <section className="headliner">
            <div className="container bg-dark-secondary text-light text-start rounded">
                <div className="row p-5">
                    <div className="col-4 headline-img d-flex align-items-center justify-content-center">
                        <img src={article.thumbnail} alt="Headline Image" className="rounded"/>
                    </div>
                    <div className="col-8 headline-text ps-5 d-flex flex-column justify-content-between"> 
                        <h1>{article.title}</h1>
                        <p className="fs-5">{article.summary}</p>
                        <div className="d-flex align-items-center">
                            <div className="author-img me-2" style={{backgroundImage: `url(${article.authorImg})`}}></div>
                            <p className="m-0 d-flex justify-content-between w-100">{article.author}<span className="text-muted ms-auto">{article.date}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}