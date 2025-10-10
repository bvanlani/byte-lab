/*
Outlnes the proper use of the Byte labs website and displays the privacy policy.
*/

//Grabbing the components that are needed.
import Nav from "../componenets/layout/Nav";
import Footer from "../componenets/layout/Footer";
import Background from "../componenets/effects/Background"
import TermsOfUseBody from "../componenets/content/TermsOfUseBody";

//Combing components into the webpage
export default function TermsOfUse(){
    return (
        <>
            <Background /> 
            <Nav />
            <TermsOfUseBody/>
            <Footer />
        </>
    )
}