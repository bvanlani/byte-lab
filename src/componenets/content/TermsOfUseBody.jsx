/* All jsx files in the content section are basically just big HTML/text documents
This one highlights the terms of use for the end users to follow. Essentially a EULA.
*/

import { Link } from "react-router-dom";

//Returning the document
export default function TermsOfUseBody(){
    return(
        <>
            <section className="terms-of-use mt-5">
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Terms of use for Byte Lab</h1>
                    <p>Last updated: <em>October 3rd, 2025</em></p>
                    <br />
                    <p>Welcome to Byte Lab (“Website”), an educational platform operated by the Byte Lab Computer Science Outreach Club (“we,” “us,” or “our”) at Lakeview Technology Academy. Byte Lab provides middle school students with a digital environment to learn computer science and test VEX robotics code.<br /><br />
                        By accessing or using this Website, you (“User”) agree to be bound by these Terms of Use. If you do not agree to these Terms, you are not permitted to use the Website.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Eligibility</h1>
                    <br />
                    <p>Byte Lab is intended for educational use by middle-school or high-school students participating in our outreach programs. Users under the age of 13 must have parental or guardian consent and be supervised by a teacher or mentor at all times while on the Website.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Acceptable Use</h1>
                    <br />
                    <p>Users agree to use the Website solely for educational purposes related to computer science and robotics.<br />
                     You must not:</p>
                     <ul className="text-start">
                        <li>Use the Website for any unlawful, harmful, or disruptive activity.</li>
                        <li>Attempt to gain unauthorized access to other users’ accounts or data.</li>
                        <li>Engage in any activity that could damage, disable, or impair the Website.</li>
                        <li>Attempt to use the Website for malicous purposes. Including but not limited to, bullying, phishing and uploading of malware or viruses.</li>
                        <li>Use inappropriate or offensive language or content.</li>
                        <li>Upload or transmit any content that is offensive, inappropriate, or violates applicable laws or local school or KUSD policies.</li>
                     </ul>
                     <p>Failure to comply may result in legal action and/or removal of access to our service(s).</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>User Content</h1>
                    <br />
                    <p>You retain ownership of any code or content you create on Byte Lab. By submitting content, you grant us a non-exclusive, royalty-free license to use, reproduce, and display your content for educational and promotional purposes, including showcasing student work.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Privacy Policy</h1>
                    <br />
                    <p>Byte Lab does not collect personal information beyond what is necessary to support educational activities. Data may be monitored by mentors and teachers to ensure appropriate use and to support learning. For more information, please refer to our <Link to="/privacy-policy" className="fst-italic fw-bold text-light text-decoration-none">Privacy Policy.</Link></p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Intellectual Property</h1>
                    <br />
                    <p>All content, software, and materials provided on the Website (excluding user-generated content) are the property of Byte Lab and/or its licensors and are protected by copyright and other intellectual property laws. You may not copy, modify, or distribute any materials without prior written permission from the Byte Lab team.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Disclaimer of Warranties</h1>
                    <br />
                    <p>Byte Lab is provided “as is” for educational purposes only. We make no warranties regarding the accuracy, reliability, or availability of the Website. Use of the Website is at your own risk.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Limitation of Liability</h1>
                    <br />
                    <p>To the maximum extent permitted by law, Byte Lab and its organizers shall not be liable for any indirect, incidental, or consequential damages arising from the use of the Website.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Changes to Terms</h1>
                    <br />
                    <p>We reserve the right to update or modify these Terms at any time. Changes will be posted on this page, and continued use of the Website constitutes acceptance of the revised Terms.</p>
                </div>
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Contact Information</h1>
                    <br />
                    <p>For questions or concerns regarding these Terms, please contact the Byte Lab team at <a href="mailto:bytelabscs@gmail.com" className="fst-italic fw-bold text-light text-decoration-none">bytelabscs@gmail.com</a> or fill out our<Link to="/contact-us" className="fst-italic fw-bold text-light text-decoration-none"> contact us form.</Link></p>
                </div>
            </section>
        </>
    )    
}