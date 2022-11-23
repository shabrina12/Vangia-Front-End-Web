import React from 'react';
import { product1, product2, product3, product4 } from '../../images';
import './products.css';

const Products = () => {
  return (
    <div className='products'>
        <h1>Few Types of Recipes</h1>
        <ul>
            <li>Body Care</li>
            <li>Skin care</li>
            <li>Hair care</li>
            <li>Perfumes</li>
        </ul>
        <div className='products-container'>
            <div className='product-card'>
                <div className='product-card-img'>
                    <img src={product1} alt='product' />
                </div>
                <h3>GARNIER</h3>
                <p>Product applied to the skin and various body parts to make</p>
                <h4>$52.99</h4>
                <button type='button'>Add to Cart</button>
            </div>

            <div className='product-card'>
                <div className='product-card-img'>
                    <img src={product2} alt='product' />
                </div>
                <h3>PANTENE</h3>
                <p>Product applied to the skin and various body parts to make </p>
                <h4>$52.99</h4>
                <button type='button'>Add to Cart</button>
            </div>

            <div className='product-card'>
                <div className='product-card-img'>
                    <img src={product3} alt='product' />
                </div>
                <h3>DOVE</h3>
                <p>Product applied to the skin and various body parts to make</p>
                <h4>$52.99</h4>
                <button type='button'>Add to Cart</button>
            </div>

            <div className='product-card'>
                <div className='product-card-img'>
                    <img src={product4} alt='product' />
                </div>
                <h3>CLINIQUE</h3>
                <p>Product applied to the skin and various body parts to make</p>
                <h4>$52.99</h4>
                <button type='button'>Add to Cart</button>
            </div>
        </div>
        <button className='seeMore' type='button'>See More</button>
    </div>
  )
}

export default Products