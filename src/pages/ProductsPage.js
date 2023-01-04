import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import {Footer} from '../containers';
import ProductsData from '../containers/products/ProductsData';
import ProductsCard from './ProductsCard';
import CatProdButton from './CatProdButton';
import '../containers/products/products.css';
import './stylepage.css'

const allCategory = ['All Products', ...new Set(ProductsData.map(prod => prod.category))];

const Products = () => {
    const [prodCategory, setProdCategory] = useState(ProductsData);
    const [buttons, setButtons] = useState(allCategory);
  
    const filter = (button) =>{
      if(button === 'All Products'){
        setProdCategory(ProductsData);
        return;
      }
      const filteredData = ProductsData.filter(prod => prod.category ===  button);
      setProdCategory(filteredData)
    }

  return (
    <>
      <Navbar />
      <section className='products-wrapper products-page'>
        <h1>Beautiful skin requires commitment not a miracle.</h1>
        <CatProdButton button={buttons} filter={filter} />

        <div className='products-container'>
          <ProductsCard products={prodCategory} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Products