/*
Outlnes the proper use of the Byte labs website and displays the privacy policy.
*/

//Grabbing the components that are needed.
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import Background from "../componenets/Background"
import { Link } from "react-router-dom";
import TermsOfUseBody from "../componenets/TermsOfUseBody";

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