import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Setting from "./Setting";

const RoutingElements = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="dhome" element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingElements;
