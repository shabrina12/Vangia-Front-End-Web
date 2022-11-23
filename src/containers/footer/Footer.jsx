import React from 'react';
import { logoFooter, linkedin, fb, twitter } from '../../images';
import './footer.css';

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
        <div className='logo'>
            <img src={logoFooter} alt='logo' className='logo-img'/>
            <p>Best online cosmetic shop for all your beauty products</p>
            <ul>
                <li><a href='https://www.facebook.com/'><img src={fb} alt='fb' /></a></li>
                <li><a href='https://www.twitter.com/'><img src={twitter} alt='twitter' /></a></li>
                <li><a href='https://www.linkedin.com/'><img src={linkedin} alt='linkedin' /></a></li>
            </ul>
        </div>

        <div className='footer-links'>
            <div className='company'>
                <h3>Company</h3>
                <ul>
                    <li><a href='#about'>About us</a></li>
                    <li><a href='#jobs'>Jobs</a></li>
                    <li><a href='#records'>Records</a></li>
                    <li><a href='#supports'>Supports</a></li>
                </ul>
            </div>
            <div className='community'>
                <h3>Community</h3>
                <ul>
                    <li><a href='#about'>For Artists</a></li>
                    <li><a href='#jobs'>Updates</a></li>
                    <li><a href='#records'>Advertising</a></li>
                    <li><a href='#supports'>Investor</a></li>
                </ul>
            </div>
            <div className='legal'>
                <h3>Legal</h3>
                <ul>
                    <li><a href='#about'>Privacy</a></li>
                    <li><a href='#jobs'>Policy</a></li>
                    <li><a href='#records'>Terms</a></li>
                    <li><a href='#supports'>Conditions</a></li>
                </ul>
            </div>
            <div className='social'>
                <h3>Social</h3>
                <ul>
                    <li><a href='#about'>Instagram</a></li>
                    <li><a href='#jobs'>Twitter</a></li>
                    <li><a href='#records'>Facebook</a></li>
                    <li><a href='#supports'>Youtube</a></li>
                </ul>
            </div>
        </div>
      
    </div>
    <p className='copyright'>Copyright 2022 Coding by Shabrina12 @github. All rights reserved.</p>
    </footer>
  )
}

export default Footer