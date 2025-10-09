//The inital landing page for the website that your first come to after loading in.


//importing all of the components that are needed to generate the page
import Nav from '../componenets/Nav.jsx'
import Header from '../componenets/Header.jsx'
import IconGrid from '../componenets/IconGrid.jsx'
import WhatWeDo from '../componenets/WhatWeDo.jsx'
import Biography from '../componenets/Biography.jsx'
import Footer from '../componenets/Footer.jsx'
import Background from '../componenets/Background.jsx'

//Creating the homepage and combining the components.
export default function HomePage(){
    return(
        <>
            <Background />
            <Nav />
            <Header />
            <IconGrid />
            <WhatWeDo />
            <Biography />
            <Footer />
        </>
    )
}