import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <h2>REACT ASSIGNMENTS :</h2>
      <Link to="/assignment1">Assignment-1</Link>
      <br />
      <Link to="/assignment2">Assignment-2</Link>
      <br />
      <Link to="/assignment3">Assignment-3</Link>
      <br />
      <Link to="/assignment4">Assignment-4</Link>
    </>
  );
};

export default MainPage;
