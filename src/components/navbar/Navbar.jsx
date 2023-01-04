import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/'>Promotions</Link>
        </div>
        <div className='nav-cart'>
           <img src={cart} alt='cart' />
        </div>
        
        <div className='navbar-smallscreen'>
            <RiMenu3Line style={{'cursor': 'pointer'}} color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className='navbar-smallscreen_overlay'>
                <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
                <div className='navbar-smallscreen_links'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/'>Promotions</Link>
                    <img src={cart} alt='cart' />
                </div>
            </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar