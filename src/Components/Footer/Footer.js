import React from 'react';
import './footer.css';
import {FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Logo from '../../assets/Bella Olonje logo 111 1 (1).png'

function Footer() {
  return (
    <footer>
        <div className='footer-section'>
        <div className="container">
            <h2>Download the app now.</h2>
            <h4 className='mt-3'>Available on your favorite store. Start your premium experience now</h4>
            <h5 className='mt-3'>Most calendars are <br /> designed for teams. </h5>
            <div className="footer-buttons mt-5">
                <button className="playstore-button-footer">Playstore</button>
                <button className="appstore-button-footer">App store</button>
            </div>
        </div>
        </div>
        <div className="footer-main container">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="socials">
                <a href="http://localhost:3000/"><FaTwitter /></a> 
                <a href="http://localhost:3000/"><FaFacebookSquare /></a> 
                <a href="http://localhost:3000/"><FaInstagram /></a> 
            </div>
            <div className="socials-two">
                <a href="http://localhost:3000/"><FaTwitter /></a> 
                <a href="http://localhost:3000/"><FaFacebookSquare /></a> 
                <a href="http://localhost:3000/"><FaLinkedin /></a> 
            </div>
            <p>Copywright 2020 Bella Onojie.com</p>
            <h6>Just type what's on your mind and we'll </h6>
        </div>
        
    </footer>
  )
}

export default Footer
