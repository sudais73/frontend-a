// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ProductUrl } from "../../Api/EndPiont";
import ProductCard from "../../Components/product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetails() {
  const { productId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          addtocart={true}
          product={product}
          flex={true}
          renderDesc={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetails;
