import React from "react";
import LoginPage from "./LoginPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav>
        <Link to="/login">Go To Login</Link>
      </nav>
    </>
  );
};

export default Home;
