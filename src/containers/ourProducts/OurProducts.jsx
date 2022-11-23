import React from 'react';
import { women } from '../../images';
import './ourproducts.css';

const OurProducts = () => {
  return (
    <div className='ourproducts'>
        <div className='ourproducts-text'>
            <span>OUR PRODUCTS</span>
            <h1>Solution for every skin type and need</h1>
            <p>To suit even the most sensitive skin, these ingredients should be 100% pure and completely natural. ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
            <br></br>
            <p>Color additives can be combined labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
            <button type='button'>Read More</button>
        </div>

        <div className='ourproducts-img'>
            <img src={women} alt='img' />
        </div>
    </div>
  )
}

export default OurProducts