import React from "react";
import { Router, Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Inbox from "./Inbox";
import Home from "./Home";


const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </>
  );
};

export default Routing;
