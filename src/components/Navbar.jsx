import React from 'react'
import airbnbLogo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav class="navbar">
            <img src={airbnbLogo} alt="Airbnb Logo" className="navbar-logo" />
        </nav>
    )
}