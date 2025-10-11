import { useParams, Link } from "react-router-dom";

import Nav from "../componenets/layout/Nav"
import Footer from "../componenets/layout/Footer"
import Background from "../componenets/effects/Background"
import Article from "../componenets/content/Article"

import articles from "../data/articles.json";

export default function ArticlePage(){
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
            <Article article={article} />
            <Footer />
        </>
    )
}