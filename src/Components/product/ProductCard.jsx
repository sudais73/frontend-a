/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import { Type } from '../../Utlity/Action.type'


function ProductCard({ product, flex, renderDesc,addtocart }) {

  const { image, title, id, rating, price,description } = product;
const [state,dispatch] = useContext(DataContext)

const addToCart =()=>{
  dispatch({
    type:Type.ADD_TO_CART,
    item:{
       image, title, id, rating, price,description
    }
  })
}

  return (
    <div className={`${classes.card_container } ${flex?classes.flex__product:""}`}>
      <Link onClick={()=>scrollTo(0,0)} to={`/products/${id}`}>
        <img src={image} alt="" />

      </Link>
      <div>
        <h3 className={classes.title}>{title}</h3>
        {renderDesc && <div style={{maxWidth:"600px"}}>{description}</div>}
        <div className={classes.Rating}>

          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
          {addtocart && <button className={classes.button} onClick={addToCart}> Add to Cart</button>}
           
      </div>
     

    </div>
  )
}

export default ProductCard
