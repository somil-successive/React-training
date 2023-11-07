import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="setting">Setting</Link>
          </li>
          <li>
            <Link to="dhome">Dashboard Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Dashboard;
