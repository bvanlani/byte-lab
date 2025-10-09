import Nav from "../componenets/layout/Nav";
import Footer from "../componenets/layout/Footer";
import Background from "../componenets/effects/Background.jsx";
import Headliner from "../componenets/Headliner.jsx";
import ArticleList from "../componenets/ArticleList.jsx";

export default function News(){
    return(
        <>
            <Background></Background>
            <Nav />
            <section className="news">
                <div className="mt-5 pt-5 px-5 text-center text-light container bg-dark rounded">
                    <h1 className="m-0">The Latest</h1>
                    <Headliner />
                </div>
                <div className="my-5 pt-5 px-5 text-center bg-dark text-light container rounded">
                    <h1 className="m-0">Previous Articles</h1>
                    <ArticleList />
                </div>
            </section>
            <Footer />
        </>
    )
}