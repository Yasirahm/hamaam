import React, { useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const OrderNow = () => {
  const { id } = useParams(); // Get Product ID from URL

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    district: "",
    contact: "",
    area: "",
    size: "",
    hamaamType: "Kashmiri Hamaam", // Default option
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a random Order ID (6-digit number)
    const orderId = Math.floor(100000 + Math.random() * 900000);

    // Construct Google Form URL with query parameters
    const googleFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSeYNOnKydoB5LpxerU2ghNJ6jNH5CzR8YmLnApj5k7tyZ-aYA/formResponse?entry.197264392=${encodeURIComponent(
      formData.name
    )}&entry.751366795=${encodeURIComponent(
      formData.district
    )}&entry.638811946=${encodeURIComponent(
      formData.contact
    )}&entry.589349865=${encodeURIComponent(
      formData.area
    )}&entry.326977170=${encodeURIComponent(
      formData.size
    )}&entry.615034887=${encodeURIComponent(formData.hamaamType)}`;

    // Show SweetAlert2 confirmation message
    Swal.fire({
      icon: "success",
      title: "🎉 Order Confirmed!",
      html: `
        <p>Thank you, <strong>${formData.name}</strong>, for your order!</p>
        <p>📦 <strong>Order ID:</strong> <span style="color: #3085d6; font-weight: bold;">#${orderId}</span></p>
        <p>🗺️ <strong>Delivery Location:</strong> ${formData.area}, ${formData.district}</p>
        <p>📞 <strong>Contact:</strong> ${formData.contact}</p>
        <p>🔥 <strong>Hamaam Type:</strong> ${formData.hamaamType}</p>
        <p>🚀 Your order is being processed, and we will contact you shortly!</p>
      `,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });

    // Open Google Form in a new tab to submit the response
    window.open(googleFormURL, "_blank");

    // Reset form fields after submission
    setFormData({
      name: "",
      district: "",
      contact: "",
      area: "",
      size: "",
      hamaamType: "Kashmiri Hamaam",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Order Now</h2>
        <p className="text-gray-600 text-center mb-6">
          Ordering product with ID: <span className="font-semibold text-blue-600">{id}</span>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* District */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">District</label>
            <input
              type="text"
              name="district"
              placeholder="Your District"
              required
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Your Contact Number"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Area</label>
            <input
              type="text"
              name="area"
              placeholder="Your Area"
              required
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Room Size */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Size of Room</label>
            <input
              type="text"
              name="size"
              placeholder="Size of Your Room"
              required
              value={formData.size}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Hamaam Type Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Hamaam Type</label>
            <select
              name="hamaamType"
              value={formData.hamaamType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option>Kashmiri Hamaam</option>
              <option>Rajasthani Hamaam</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-lg font-semibold"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
