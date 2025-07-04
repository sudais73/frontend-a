// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import axios from "axios";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [product, setproduct] = useState();
  const [isloading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className={classes.product_container}>
          {product?.map((singleProduct) => (
            <ProductCard
              addtocart={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Product;
