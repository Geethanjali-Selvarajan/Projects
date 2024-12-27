import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Cuisine from"./pages/Cuisine";
import Booking from "./pages/Booking";
import RestaurantPage from "./pages/RestaurantPage";
import { useAuthStore } from './store/useAuthStore';
import { Loader } from "lucide-react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
          <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!authUser ? <Registration />  : <Navigate to="/" />} />
          <Route path="/contact" element={authUser ? <Contact />  : <Navigate to="/login" />} />
          <Route path="/reservation" element={authUser ? <Reservation />  : <Navigate to="/login" />} />
          <Route path="/cuisine" element={authUser ? <Cuisine/>  : <Navigate to="/login" />} />
          <Route path="/booking" element={authUser ? <Booking/>  : <Navigate to="/login" />} />
          <Route path="/restaurant" element={authUser ? <RestaurantPage/>  : <Navigate to="/login" />} />
     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
