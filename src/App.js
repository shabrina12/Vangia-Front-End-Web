import React from 'react';
import {  Header, Features, OurProducts, Products, Purifying, Testimonials, Newsletter, Footer} from './containers';
import Partners from './components/partners/Partners';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Features />
      <OurProducts />
      <Products />
      <Purifying />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App