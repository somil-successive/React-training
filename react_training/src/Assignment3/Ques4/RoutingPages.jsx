import React from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import About from "./About";

function RoutingPages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default RoutingPages;
