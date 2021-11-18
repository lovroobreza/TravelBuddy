import React from 'react'
import './Hero.scss'

import imageSrc from '../../assets/landing-page-image.jpg' 

const Hero = () => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="landing page image" className="hero-img"/>
            <h1 className="hero-title">Tired of travelling alone?</h1>
            <h2 className="hero-subtitle">Find a companion - long or short term</h2>
        </div>
    )
}

export default Hero
