import React from "react";
import ProductsList from "./ProductsList";
import ProductDetail from "./ProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutingItem = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />}>
            <Route path="/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutingItem;
