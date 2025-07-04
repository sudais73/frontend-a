// eslint-disable-next-line no-unused-vars
import React from 'react'
import {imageInfo} from "./catagory.js"
import CatagoryCard from './CatagoryCard.jsx'
import classes from "./Catagory.module.css"








function Catagory(){
  return (
    <div className={classes.catagory_container}>
      {
        imageInfo?.map((info)=>(
            // eslint-disable-next-line react/jsx-key
            <CatagoryCard data = {info}/>
        ))


      }
    </div>
  )
};

export default Catagory
