import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

import Assignment_3 from "./Assignment3/Assignment_3";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/assignment3" element={<Assignment_3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
