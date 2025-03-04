import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center text-gray-700">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-6">
      {/* Left Side - Fixed Size Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full max-w-[400px] h-[300px] object-cover rounded-md"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            Price: <span className="text-blue-600">₹{product.price}</span>
          </p>

          {/* Details Section */}
          <div className="mt-4">
            <h4 className="text-xl font-semibold">Details:</h4>
            <p className="text-gray-700">{product.details}</p>
          </div>

          {/* Size & Location */}
          <div className="mt-4 flex justify-between text-gray-700">
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Location:</strong> {product.location}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button 
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => navigate(`/order/${id}`)}
          >
            Buy Now
          </button>
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => navigate(`/admin/edit/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
