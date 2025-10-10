import Nav from '../componenets/layout/Nav';
import Footer from '../componenets/layout/Footer';
import ContactUsForm from '../componenets/content/ContactUsForm.jsx';
import Background from '../componenets/effects/Background.jsx';

export default function ContactUs(){
    return(
        <>
            <Background />
            <Nav />
            <ContactUsForm />
            <Footer />
        </>
    )
}