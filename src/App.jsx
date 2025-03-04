import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetails from "./components/ProductDetails";
import OrderNow from "./components/OrderNow";
import ProductEdit from "./components/ProductEdit";
import Kas from "./components/Kas" // ✅ Import ProductEdit
import About from './components/About';
import Contact from './components/Contact';
import AdminDashboard from "./pages/AdminDashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/kas" element={<Kas />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/order/:id" element={<OrderNow />} />
      <Route path="/admin/edit/:id" element={<ProductEdit />} /> {/* ✅ Admin Edit Route */}
    </Routes>
  );
};

export default App;
