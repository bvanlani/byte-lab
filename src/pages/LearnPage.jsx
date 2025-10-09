//The learn page is the page that provides a basic understanding of Python functions.
//It operates as a way for the users to learn and undestand how basic programs are made.

//Importing the components 
import PythonBasics from "../componenets/learn";
import Background from "../componenets/Background";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";

//Returning the compiled website.
export default function LearnPage(){
    return(
        <>
        <Background />
        <Nav />
        <PythonBasics></PythonBasics>
        <Footer />
        </>
    )
}