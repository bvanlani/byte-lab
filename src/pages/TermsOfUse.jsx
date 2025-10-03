import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";

export default function TermsOfUse(){
    return (
        <>
            <Nav />
            <section className="terms-of-use">
                <div className="container text-center pt-5">
                    <h1 className="text-light">Terms of use for Byte Lab</h1>
                </div>
            </section>
            <Footer />
        </>
    )
}