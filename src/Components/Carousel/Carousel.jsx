// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from './images/data'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Classes from "../Header/Header.module.css"



function CarouselEffect(){
  return (
    <div>
      <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
        {
            img.map((imageItemlink)=>{
                // eslint-disable-next-line react/jsx-key
                return <img src={imageItemlink}/>
            })
        }

      </Carousel>

      <div className={Classes.hero_img}>

      </div>
    </div>
  )
}

export default CarouselEffect
