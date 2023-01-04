import React, {useState} from 'react';
import ProductsData from './ProductsData';
import ProdCard from './ProdCard';
import CategoryButton from './CatButton';
import './products.css';

const allCategory = ['All', ...new Set(ProductsData.map(prod => prod.category))];

const Products = () => {
    const [prodMenu, setProdMenu] = useState(ProductsData);
    const [buttons, setButtons] = useState(allCategory);
  
    const filter = (button) =>{
      if(button === 'All'){
        setProdMenu(ProductsData);
        return;
      }
      const filteredData = ProductsData.filter(prod => prod.category ===  button);
      setProdMenu(filteredData)
    }

  return (
    <div className='products-wrapper'>
        <h1>Few Types of Recipes</h1>
        <CategoryButton button={buttons} filter={filter} />

        <div className='products-container'>
            <ProdCard prodMenu={prodMenu} />
        </div>
        <button className='seeMore' type='button'>See More</button>
    </div>
  )
}

export default Products