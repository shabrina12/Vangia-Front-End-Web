import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { headerImg, headerImg2 } from '../../images';
import './header.css';

const Header = () => {
  return (
    <header>
        <Navbar />
        <div className='header'>
          <div className='header-text'>
            <span>ALL NATURAL</span>
            <h1>Select <span>beauty</span> for your skin</h1>
            <p>Vangia offers high quality, effective products at unbeatable prices. Our team of experts have formulated a range of products with the finest ingredients to satisfy your needs.</p>
            <button type='button'>View Products</button>
          </div>

          <div className='header-img'>
            <img src={headerImg} alt='img' />
            <div className='header-img-bottom'>
              <img src={headerImg2} alt='img' />
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header