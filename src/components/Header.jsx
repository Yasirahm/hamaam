import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = ({ productListRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to scroll to ProductList
  const handleScrollToProductList = (e) => {
    e.preventDefault();
    if (productListRef?.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/ProductList"); // Navigate if not on the home page
    }
  };

  return (
    <div className="bg-white w-full border-b border-orange-700 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-xl lg:text-3xl text-black font-bold flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10 lg:w-16 lg:h-16" />
          Abdul Hamid
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-gray-600 font-bold">
          <Link to="/Home" className="hover:underline hover:text-blue-700 transition-all duration-300 text-xs lg:text-xl">
            Home
          </Link>
          <Link to="/Kas" className="hover:underline hover:text-blue-700 transition-all duration-300 text-xs lg:text-xl">
            Hamaaams
          </Link>
          
          <Link to="/contact" className="hover:underline hover:text-blue-700 transition-all duration-300 text-xs lg:text-xl">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-300 p-4">
          <Link to="/Home" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/Kas" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setMenuOpen(false)}>
            Hamaams
          </Link>
         
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-700" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
