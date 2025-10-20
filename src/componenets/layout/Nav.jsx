import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav(){
    return(
        <nav className="navbar bg-dark nav-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Byte Lab</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto"  >
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/the-lab">The Lab</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/learn-page">Learn</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/news">News</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link text-light" to="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </div>    
                </div>            
        </nav>
    )
}