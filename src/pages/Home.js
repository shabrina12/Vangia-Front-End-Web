import React from 'react';
import {  Header, Features, OurProducts, Products, Purifying, Testimonials, Newsletter, Footer} from '../containers';
import Partners from '../components/partners/Partners';

const Home = () => {
  return (
    <>
      <Header />
      <Partners />
      <Features />
      <OurProducts />
      <Products />
      <Purifying />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home