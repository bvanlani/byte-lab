import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav className="navbar bg-dark">
            <div className="container">
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
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/the-lab">The Lab</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/learn">Learn</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/news">News</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-primary" to="/the-lab">The Lab</Link>
            </div>
        </nav>
    )
}