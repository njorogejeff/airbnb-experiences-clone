import React from 'react'
import heroImage from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroImage} alt="Online Experiences" class="hero-img" />
            <h1 class="hero-title">Online Experience</h1>
            <p class="hero-desc">Join unique interactive activities led by<br/> one-of-a-kind hosts-all without leaving<br/> home.</p>
        </section>
    )
}