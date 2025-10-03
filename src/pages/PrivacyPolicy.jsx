import Background from "../componenets/Background";
import Nav from "../componenets/Nav";
import Footer from "../componenets/Footer";

export default function PrivacyPolicy(){
    return(
        <>
            <Background />
            <Nav />
            <section className="privacy-policy mt-5">
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Byte Lab Privacy Policy</h1>
                    <p>Last updated: <em>October 3rd, 2025</em></p>
                    <br />
                    <p>Welcome to Byte Lab! We care about protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your choices. Because many of our users are under 13, we follow the Children’s Online Privacy Protection Act (COPPA).</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Information We Collect</h1>
                    <br />
                    <p>When you use Byte Lab, we collect: </p>
                    <ul className="text-start">
                        <li><b>Account Information: </b>username, password, and (if required) a parent/guardians email</li>
                        <li><b>Content: </b>the Python code you write, projects you create, and files you upload</li>
                        <li><b>Device and usage data: </b>basic information like browser type, device type, and how you use the site (for security and to improve Byte Lab).</li>
                    </ul>
                    <p>We do not collect personal information like your full name, address, or phone number.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>How We Use Information</h1>
                    <br />
                    <p>We use the information we collect to: </p>
                    <ul className="text-start">
                        <li>Let you create and run python project.</li>
                        <li>Keep the website safe and working correctly.</li>
                        <li>Improve our lessons and features.</li>
                        <li>Communicate with parents/guardians when needed.</li>
                    </ul>
                    <p>We will <b>never </b> sell your information to adverstisers or third parties</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Sharing Information</h1>
                    <br />
                    <p>We may share information only when:</p>
                    <ul className="text-start">
                        <li>Required by law.</li>
                        <li>Needed to protect the safety of our users.</li>
                        <li>With trusted service providers who help us run the site (for example, hosting).</li>
                    </ul>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Parental Rights (COPPA)</h1>
                    <br />
                    <p>If you are under 13, you need a parent/guardian's permission to use Byte Lab.</p>
                    <p>Parents/Guardians can: </p>
                    <ul className="text-start">
                        <li>Review the personal information their child has given us.</li>
                        <li>Ask us to delete their child’s account or information.</li>
                        <li>Refuse any further collection or use of their child’s information.</li>
                    </ul>
                    <p>Parents can contact us at <em>ben.vanlaningham@gmail.com</em></p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Cookies & Tracking</h1>
                    <br />
                    <p>Byte Lab may use small files called “cookies” to help you stay logged in and remember your settings. We do not use tracking for advertising.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Security</h1>
                    <br />
                    <p>We use reasonable security measures to protect your information. However, no system is 100% secure, so please keep your password safe.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Changes to This Policy</h1>
                    <br />
                    <p>We may update this Privacy Policy from time to time. If we make big changes, we’ll post a notice on the site.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Contact Information</h1>
                    <br />
                    <p>For questions or concerns regarding this policy, please contact the Byte Lab team at <em>ben.vanlaningham@gmail.com</em>.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}