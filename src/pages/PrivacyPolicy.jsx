/*
This page outlines the privacy policy for using the website. 
*/

//Importing the neccessary components.
import Background from "../componenets/effects/Background";
import Nav from "../componenets/layout/Nav";
import Footer from "../componenets/layout/Footer";
import PrivacyPolicyBody from "../componenets/content/PrivacyPolicyBody";

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