import React from 'react'
import airbnbLogo from '/images/airbnb-wordmark.svg'

export default function Navbar() {
    return (
        <nav className='py-5 px-8 shadow-md shadow-gray-200'>
            <img src={airbnbLogo} alt="" className='h-8' />
        </nav>
    )
}