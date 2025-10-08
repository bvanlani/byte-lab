import thumbnail from "../assets/bg-showcase-3.jpg"
import authorImg from "../assets/testimonials-2.jpg"
import articles from "../data/articles.json"

export default function ArticleList(){
    return(
        <>
            <section className="article-list">
                <div className="d-flex flex-column align-items-center px-3">
                    {[...articles].reverse().map(article => (
                        <div key={article.id} className="article row bg-dark-secondary rounded my-2">
                            <div className="col-2 thumbnail d-flex align-items-center p-3">
                                <img src={article.thumbnail} alt="Article Thumbnail" className="rounded"></img>
                            </div>
                            <div className="col-10 d-flex align-items-center justify-content-between ps-5 row text-start">
                                <h2 className="m-0 col-9">{article.title}</h2>
                                <div className="d-flex align-items-center col-3 justify-content-end text-center">
                                    <div className="author-img me-2" style={{backgroundImage: `url(${article.authorImg})`}}></div>
                                    <p className="m-0">{article.author}<br /><span className="text-muted"> {article.date}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}