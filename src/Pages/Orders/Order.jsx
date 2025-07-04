/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import LayOut from '../../../src/Components/LayOut/LayOut'
import { db } from '../../Utlity/Firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import classes from './Orders.module.css'

import { collection,onSnapshot, orderBy, query } from "firebase/firestore";
import ProductCard from '../../Components/product/ProductCard'
function Order() {
  const[{user},dispatch] = useContext(DataContext)

const[orders, setOrders] = useState([])

 useEffect(() => {
    if (!user) return;

    // Create a reference to the user's orders subcollection
    const ordersRef = collection(db, "users", user.uid, "orders");
    // Query orders by 'created' in descending order (newest first)
    const ordersQuery = query(ordersRef, orderBy("created", "desc"));

    // Set up real-time listener
    const unsubscribe = onSnapshot(
      ordersQuery,
      (snapshot) => {
        // console.log(snapshot)
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
        
      },
      (error) => {
        console.error("Error fetching orders:", error);
        
      }
    );

    // Clean up listener on unmount
    return () => unsubscribe();
  }, [user]); // Dependency: re-run when user changes

  return (
    <LayOut>
    <div className={classes.container}> 
      <div className={classes.orders__container}>
         <h2>Your Orders</h2>
         <div>
          {
            orders?.length == 0 && <h3>You don't have orders yet</h3>
          }
         </div>
      
      <div>
       {
        orders?.map((eachOrders, i)=>(
          <div key={i}>
            <hr />
            <p>Order Id :{eachOrders.id}</p>
            {
              eachOrders?.basket?.map((order,i)=>{
                return <ProductCard 
                key={i}
                product={order}
                 flex={true}
                />
               
              })
            }
          </div>

        ))
       }
      </div>
      </div>
    </div>
    </LayOut>
  )
}

export default Order
