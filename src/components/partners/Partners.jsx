import React from 'react';
import { boss, vogue, amazon, google, paypal } from '../../images';
import './partners.css';

const Partners = () => {
  return (
    <div className='partners'>
        <h1>Our Partners</h1>
        <div className='partners-card'>
            <img src={boss} alt='img' />
            <img src={vogue} alt='img' />
            <img src={amazon} alt='img' />
            <img src={google} alt='img' />
            <img src={paypal} alt='img' />
        </div>
    </div>
  )
}

export default Partners