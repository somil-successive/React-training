import React from "react";
import { Navigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const handleClick = () => {
    return <Navigate to="/" />;
  };
  return (
    <>
      <p>{productId}</p>
      <button onClick={handleClick}>Go Back</button>
    </>
  );
};
export default ProductDetail;
