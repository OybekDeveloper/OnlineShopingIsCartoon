import React from 'react'
import foto from '../photo/logo.png'
import '../App.css'
export default function Navbar() {
    return (
        <nav className="navbarStyle">
            <div className="nav-wrapper">
                    <img src={foto} className='LogoNav' alt='LogoSHop' />
                <a href="ds" className="brand-logo">
                    Bek Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="home">Home</a></li>
                    <li><a href="home">Brend</a></li>
                    <li><a href="home">About</a></li>
                    <li><a href="home">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
