import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='text-container'>
          <h1>Subscribe Newsletter</h1>
          <p>Keep in touch and never miss out on our latest products</p>
        </div>
        <div className='input-container'>
          <input type="email" placeholder="Enter your email" />
          <button type="button">Get Started</button>
        </div>
    </div>
  )
}

export default Newsletter