import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Cuisine from"./pages/Cuisine";
import Booking from "./pages/Booking";
import SearchPage from "./pages/SearchPage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cuisine" element={<Cuisine/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/searchpage" element={<SearchPage/>} />
          <Route path="/restaurant" element={<RestaurantPage/>} />
        
          
        
        
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
