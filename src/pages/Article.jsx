import { useParams, Link } from "react-router-dom";

import Nav from "../componenets/layout/Header"
import Footer from "../componenets/layout/Footer"
import Background from "../componenets/effects/Background"

import articles from "../data/articles.json";

export default function Article(){
    let { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if(!article){
    
        return(
            <>
                <Background />
                <Nav />
                <h1>Article Not Found</h1>
                <Footer />
            </>
        )
    }

    return(
        <>
            <Background />
            <Nav />
            <section className="article-page">
                <div className="container my-5 mx-auto p-5 bg-dark d-flex flex-column align-items-center rounded text-light">
                    <Link to="/news" className="text-light text-decoration-none"><button className="btn btn-primary px-5 highlight mt-3">Back to News</button></Link>
                    <img src={article.thumbnail} alt="Thumbnail Image" className="full-size-img rounded py-5"></img>
                    <h1>{article.title}</h1>
                    <div className="d-flex justify-content-between w-100 px-5 mt-3">
                        <div className="d-flex align-items-center">
                            <div className="author-img me-2" style={{backgroundImage: `url(${article.authorImg})`}}></div>
                            <p className="m-0">{article.author}</p>
                        </div>
                            <p className="text-muted">{article.date}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} className="p-5 fs-4"/>
                    <Link to="/news" className="text-light text-decoration-none"><button className="btn btn-primary px-5 highlight mt-3">Back to News</button></Link>
                </div>
            </section>
            <Footer />
        </>
    )
}