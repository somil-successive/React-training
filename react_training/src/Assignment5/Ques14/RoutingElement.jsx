import React, { createContext } from 'react'
import { Router, Route, Routes, BrowserRouter, Outlet } from "react-router-dom";


export const UserContext=createContext();
    
const RoutingElement = ({children}) => {

   

    return (
        <>
        <UserContext.Provider value={}>
            {children}
        </UserContext.Provider>


          <BrowserRouter>
            <Routes>
                
            <Route path="/" element={<Login />} /> 
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>

          <Outlet />
        </>
      );
   

 
}

export default RoutingElement
