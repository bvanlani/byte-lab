import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav className="navbar bg-dark static-top">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">Byte Lab</Link>
                <Link className="btn btn-primary" to="/the-lab">The Lab</Link>
            </div>
        </nav>
    )
}