import Nav from '../componenets/Nav.jsx'
import Header from '../componenets/Header.jsx'
import IconGrid from '../componenets/IconGrid.jsx'
import WhatWeDo from '../componenets/WhatWeDo.jsx'
import SectionSplit from '../componenets/SectionSplit.jsx'
import Biography from '../componenets/Biography.jsx'
import Footer from '../componenets/Footer.jsx'
import Background from '../componenets/Background.jsx'
import HomeToNews from '../componenets/HomeToNews.jsx'

export default function HomePage(){
    return(
        <>
            <Background />
            <Nav />
            <Header />
            <IconGrid />
            <WhatWeDo />
            <HomeToNews />
            <Biography />
            <Footer />
        </>
    )
}