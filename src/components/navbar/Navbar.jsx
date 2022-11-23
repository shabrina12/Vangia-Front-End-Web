import React, { useState } from 'react';
import { logo, cart } from '../../images';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
        <div className='nav-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='nav-links'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#products'>Products</a></li>
                <li><a href='#promotions'>Promotions</a></li>
            </ul>
        </div>
        <div className='nav-cart'>
           <img src={cart} alt='cart' />
        </div>
        
        <div className='navbar-smallscreen'>
            <RiMenu3Line style={{'cursor': 'pointer'}} color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='navbar-smallscreen_overlay'>
                <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
                <ul className='navbar-smallscreen_links'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#products'>Products</a></li>
                    <li><a href='#promotions'>Promotions</a></li>
                    <li><img src={cart} alt='cart' /></li>
                </ul>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar