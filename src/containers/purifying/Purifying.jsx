import React from 'react';
import { spa } from '../../images';
import './purifying.css';

const Purifying = () => {
  return (
    <div className='purifying'>
        <div className='purifying-container'>
            <div className='section1'>
                <img src={spa} alt='img' />
            </div>
            <div className='section2'>
                <h1>Purifying Skin Routine</h1>
                <p>To suit even the most sensitive skin, these ingredients should be 100% pure and completely natural. ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
                <br></br>
                <p>Color additives can be combined labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
                <button type='button'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Purifying