import {Link} from 'react-router-dom';

export default function Article(props){
    let article = props.article;
    return(
        <section className="article-page">
            <div className="container my-5 mx-auto p-5 bg-dark d-flex flex-column align-items-center rounded text-light">
                <Link to="/news" className="text-light text-decoration-none pb-5"><button className="btn btn-primary px-5 highlight mt-3">Back to News</button></Link>
                <img src={article.thumbnail} alt="Thumbnail Image" className="full-size-img rounded"></img>
                <h1 className="pt-5">{article.title}</h1>
                <div className="d-flex justify-content-between w-100 mt-3">
                    <div className="d-flex align-items-center">
                        <div className="author-img me-2" style={{backgroundImage: `url(${article.authorImg})`}}></div>
                        <p className="m-0">{article.author}</p>
                    </div>
                        <p className="text-muted">{article.date}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: article.content }} className="article-content bg-dark-secondary rounded my-4"/>
                <Link to="/news" className="text-light text-decoration-none"><button className="btn btn-primary px-5 highlight mt-3">Back to News</button></Link>
            </div>
        </section>
    )
}