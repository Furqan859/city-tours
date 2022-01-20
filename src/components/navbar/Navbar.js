import React from 'react';
import './Navbar.css';
import logo from '../../logo.png.jpg';
export default function Navbar() {
    return ( 
        <nav className="navbar">
             <img src={logo} alt='city logo tours' className="image-div"/>
             <ul className="nav-links">
             <li>
             <a href="/" className="nav-link">
                 home
             </a>
             </li>
             <li>
             <a href="/" className="nav-link">
                 about
             </a>
             </li>
             <li>
             <a href="/" className="nav-link active">
                 tour
             </a>
             </li>
             </ul>
        </nav>
    );
}

