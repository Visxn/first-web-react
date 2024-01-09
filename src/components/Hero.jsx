import React from 'react'
import Kid from '../assets/images/kiddo.png';
import Presents from '../assets/images/regalos.png';

const Hero = () => {
  return (
    <div className="hero-content">
        <div className="kiddo">
            <img className='kid-img' src= {Kid} alt="kid" />
        </div>
        <div className="presents">
            <img className='presents-img' src= {Presents} alt="presents" />
        </div>

        <div className="text-content">
            <h1>Christmas is coming!</h1>
            <h2>All our items with an extra 30% off!</h2>
            <p>Get all your presents here!</p>
        </div>
    </div>
  )
}

export default Hero