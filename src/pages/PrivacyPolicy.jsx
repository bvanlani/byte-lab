/*
This page outlines the privacy policy for using the website. 
*/

//Importing the neccessary components.
import Background from "../componenets/Background";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";
import PrivacyPolicyBody from "../componenets/privacyPolicyBody";

//Generating the page and combinig the components.
export default function PrivacyPolicy(){
    return(
        <>
            <Background />
            <Nav />
            <PrivacyPolicyBody/>
            <Footer />
        </>
    )
}