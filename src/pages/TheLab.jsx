/* 
The lab is the interactive terminal that is used by the students to devlop save and
execute their programs. It is a python based terminal with a beginner focused UI and design
*/

//Importing the neccessary components
import Nav from '../componenets/layout/Nav.jsx'
import Background from '../componenets/effects/Background.jsx'
import Footer from '../componenets/layout/Footer.jsx'
import Compiler from "../componenets/Compiler.jsx";
import ColorLegend from "../componenets/content/ColorLegend.jsx";
import SectionSplit from "../componenets/layout/SectionSplit";
//Formatting the page and adding all of the compoenents.
export default function TheLab(){
    return(
        <>
            <Background />
            <Nav/>
            <section className="min-vh-100 d-flex flex-column">
                <div className="container bg-transparent text-light text-center py-4">
                    <h1>The Lab</h1>
                </div>
                <ColorLegend/>
                <Compiler/>
                <SectionSplit/>
            </section>
            <Footer />
        </>
    )
}