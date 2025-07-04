// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import CurrencyFormat from './../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import { Type } from "../../Utlity/Action.type";
function Cart() {
  const [{ basket},  dispach] = useContext(DataContext);
const total= basket.reduce((amount, item)=>{
    return   item.price*item.amount + amount
},0)

const increment =(item)=>{
  dispach({
    type:Type.ADD_TO_CART,
    item
  })
}

const decrement = (id)=>{
  dispach({
    type:Type.REMOVE_FROM_CART,
    id
  })
}
console.log(basket)
  return (
    <LayOut>

      <section className={classes.container}>
      <div className={classes.cart_left}>
        <h2 className={classes.cart_left_h2}>Your shipping Basket </h2>
        
        <hr />
        {basket.length == 0 ? (
          <p>oops! No item in your cart</p>
        ) : (
          basket?.map((item, i) => {
            return  <section className={classes.cartproduct_flex}  key={i}>
                <ProductCard

                renderDesc={true}
                flex={true}
                product={item}
                addtocart= {false}
              />

              <div className={classes.cart_btn}>
                <button onClick={()=>increment(item)}>+</button>
                <span>{item.amount}</span>
                <button onClick={()=>decrement(item.id)}>-</button>
              </div>
            </section>
          })
        )}
      </div>

      {basket?.length !==0&&(
        <div className={classes.totals_box}>
        <div>
          <h3>Subtotals({basket.length} items)</h3>
         <h4><CurrencyFormat amount={total} /></h4>
          </div>

          <span>
            <input type="checkbox" />
            <span>This order contains a gift</span>
          </span>
          <Link to={'/payments'}>Continue to ckeckout</Link>
      </div>
      )}
      </section>
    </LayOut>
  );
}

export default Cart;
