import Nav from '../componenets/Nav.jsx'
import Background from '../componenets/Background.jsx'
import Footer from '../componenets/Footer.jsx'
import TheLabMainPage from '../componenets/TheLabMainPage.jsx'

export default function TheLab(){
    return(
        <>
            <Background />
            <Nav/>
            <TheLabMainPage />
            <Footer />
        </>
    )
}