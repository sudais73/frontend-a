// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Header from './../../Components/Header/Header';
import CarouselEffect from './../../Components/Carousel/Carousel';
import Catagory from './../../Components/Catagory/Catagory.jsx';
import Product from './../../Components/product/Product';
import LayOut from '../../Components/LayOut/LayOut';
function Landing() {
  return (
    
      <LayOut>
           
            <CarouselEffect/>
            <Catagory/>
            <Product/>

    </LayOut>
  
  )
}

export default Landing

