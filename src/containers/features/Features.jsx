import React from 'react';
import { icon1, icon2, icon3 } from '../../images';
import './features.css';

const Features = () => {
  return (
    <div className='features'>
        <span>ALL NATURAL PRODUCTS</span>
        <h1>Formulated with the finest ingredients</h1>
        <div className='features-container'>
            <div className='feature-card'>
                <img src={icon1} alt='icon' />
                <h2>120</h2>
                <h5>Flavonoids</h5>
                <p>Skin care without all the fuss. The smallest bottle is perfect for traveling or to keep at work</p>
            </div>

            <div className='feature-card'>
                <img src={icon2} alt='icon' />
                <h2>80</h2>
                <h5>Stilbenes</h5>
                <p>We use only the purest ingredients that are sourced locally and organic where possible.</p>
            </div>

            <div className='feature-card'>
                <img src={icon3} alt='icon' />
                <h2>112</h2>
                <h5>Phelonic acid</h5>
                <p>Natural, plant-based ingredients that, whole food goodness, with no harmful chemicals.</p>
            </div>
        </div>
    </div>
  )
}

export default Features