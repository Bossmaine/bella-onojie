import React from 'react';
import './hero.css';
import Phones from '../../assets/Group 53 (1).png'

function Hero() {
  return (
    <div className='hero-section'>
        <div className="container">
            <h3>Food App</h3>
            <h1>Why stay hungry when <br /> 
                you can order form Bella Onojie
            </h1>
            <h4>Download the bella onoje’s food app now on</h4>
        </div>
        <div className="download-buttons">
            <button className='playstore-button'>Playstore</button>
            <button className='appstore-button'>App Store</button>
        </div>
        <div className="phone-images ml-5">
            <img src={Phones} alt="App store and Playstore"/>
        </div>
    </div>
  )
}

export default Hero
