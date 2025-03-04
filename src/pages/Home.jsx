import React from "react";
import ProductUpload from "../components/ProductUpload";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import AdminDashboard from "./AdminDashboard";



const Home = ({ productListRef }) => {
  return (
    <>
      <Header/>
      <AdminDashboard/>
      <ProductUpload />
      
      
    <div className=" bg-gray-100 p-6">
    <div
    
    
    className="flex flex-col items-center justify-center mt-10 lg:h-screen text-center px-4 ">
      <h1 className="text-black text-2xl lg:text-5xl hover:scale-105 font-bold mb-4">Welcome to Kashmir Heating Solutions – Stay Warm, Stay Comfortable!</h1>
      
      
      <div className="mt-10 mb-10">
        <h2 className="text-xs lg:text-2xl text-gray-800 font-bold">Traditional Hamaam Heating Systems for Your Home</h2>
        <p className="text-xs lg:text-lg">Winter in Kashmir can be harsh, but with our authentic Hamaam heating systems, you can experience warmth like never before. We specialize in providing both Kashmiri and Rajasthani Hamaam systems at the most reasonable prices, ensuring that your home remains cozy and comfortable throughout the cold season.</p>
        
      </div>
    </div>
  
    
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hamaam Products</h2>

      {/* Product Upload Section */}
      <div className="max-w-3xl mx-auto bg-gray-400 p-3 shadow-md rounded-lg mb-8">
     
        
      </div>

      {/* Product List Section */}
      <div className="container mx-auto">
        <ProductList />
      </div>
    </div>
    </>
  );
};

export default Home;
