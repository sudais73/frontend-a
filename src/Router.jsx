/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Landing from './Pages/Landing/Landing'

import Payment from './Pages/Payment/Payment'
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Auth from './Pages/Auth/Auth';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51RaBfjRVkBN3l4eehJQV7Px7NdV8bt6kTfyZF20uPn2G92iZkcwuUhq0634qWaJsQ5aoSMuKL7SmaRrqNOUziQKD00eZXkDCyK');
import ProtectedRoute from './Components/protectedRoute/protectedRoute';
function Routing() {
  return (
    
    <Router>
        <Routes>
            <Route>
            <Route path='/' element  = {<Landing/>}/>
            <Route path='/auth' element  = {<Auth/>}/>
            <Route path='/payments' element  = {
             <ProtectedRoute msg = {"you must login to pay"} redirect={'/payments'}>
               <Elements stripe={stripePromise} >
                   <Payment/>
              </Elements>
             </ProtectedRoute>
             }
              
              />
            <Route path='/orders' element  = {
              <ProtectedRoute  msg = {"you must login to see your orders"} redirect={'/orders'}>
                     <Order/>
              </ProtectedRoute>
           }/>
            <Route path='/cart' element  = {<Cart/>}/>
        
            <Route path='/category/:catagoryName' element  = {<Results/>}/>
            <Route path='/products/:productId' element  = {<ProductDetails/>}/>



            </Route>
        </Routes>

    </Router>

  )
}

export default Routing
