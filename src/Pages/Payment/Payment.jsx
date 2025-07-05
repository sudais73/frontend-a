/* eslint-disable no-unused-vars */
import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { useContext } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "./../../Components/product/ProductCard";
import { db } from "../../Utlity/Firebase";
  import { doc, setDoc, collection } from "firebase/firestore";


import {
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "./../../Components/CurrencyFormat/CurrencyFormat";

import { ClipLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utlity/Action.type";
import { axiosInstance } from "../../Api/axios";
function Payment() {

  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
const navigate = useNavigate()
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardErro] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
const[processing, setProcessing] = useState(false)
  const handleChange = (e) => {
    e.error?.message ? setCardErro(e.error.message) : "";
  };


  const handlePayment = async (e)=>{
    e.preventDefault()
    try {
      setProcessing(true)
      //1 contacting backend to get the client secret//

      const response = await axiosInstance.post(`/create-payment-intent?total=${total*100}`)
      console.log(response.data)
   const clientSecret = response.data?.clientSecret

// console.log(clientSecret)
 // 2 client side confirmation//
const {paymentIntent} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method:{
      card:elements.getElement(CardElement)
    }
  },
)

// console.log(confirmation)
      //  saving orders in the firestore and clear the cart//



await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created
});


//clearing the cart//
dispatch({
  type:Type.CLEAR_CART
})

setProcessing(false)
navigate('/orders',{state:{msg:"You Have Placed New Orders"}})

setProcessing(false)
    } catch (error) {
      console.log(error)
     setProcessing(false)
    }
      

     









  }

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>

      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 script</div>
            <div>Shashe,ET</div>
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => {
              return <ProductCard flex={true} key={i} product={item} />;
            })}
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.card__container}>
            <form onSubmit={handlePayment} className={classes.payment__details}>
              {cardError && <small style={{ color: "red" }}>{cardError}</small>}
              <CardElement onChange={handleChange} />

              <div className={classes.payment_price}>
                <div>
                  <span>
                    Total Order | <CurrencyFormat amount={total} />
                  </span>
                  <button type="submit">
                  {
                    processing?(
                      <div className={classes.loader__btn}>
                        <div>
                           <ClipLoader size={12}/>
                        </div>
                       
                    
                      </div>
                    ):" Pay Now"
                  }
                  
                </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
