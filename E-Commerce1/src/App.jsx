import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { useState } from "react";
import Order from "./Pages/Order";
import FilterData from "./Pages/FilterData";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Contact/Contact";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder ={setOrder}/>} />
        <Route path="/order-confirmation" element={<Order order ={order}/>} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* Default redirect or 404 handling */}
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;