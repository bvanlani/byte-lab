import showcase1 from '../assets/bg-showcase-1.jpg'
import showcase2 from '../assets/bg-showcase-2.jpg'
import showcase3 from '../assets/bg-showcase-3.jpg' 

export default function WhatWeDo(){
    return(
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${showcase1})` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2 className="text-light">What We Do</h2>
                        <p className="lead mb-0 text-light">
                            Byte Lab is a student-founded computer science outreach program that introduces middle schoolers to coding through robotics. Using our custom simulator and standardized VEX robots, students learn to solve mazes, think logically, and explore computer science in a hands-on way.
                        </p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${showcase2})` }}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2 className="text-light">Our Story</h2>
                        <p className="lead mb-0 text-light">
                            Founded in 2025 by a group of passionate high school students, Byte Lab has grown into a thriving community dedicated to making computer science accessible and fun for younger learners. Our team of experienced mentors is committed to providing quality education and inspiring the next generation of tech enthusiasts.    
                        </p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${showcase3})` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2 className="text-light">Last Section</h2>
                        <p className="lead mb-0 text-light">
                            I don't know what to put here
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}