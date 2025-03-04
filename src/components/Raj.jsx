import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/Raj.jpg';
import image3 from '../assets/Raj2.jpg';

const Raj = () => {
  const phoneNumber = "916005441991";
  const defaultMessage = encodeURIComponent("Hello Yasir! I'm interested in Rajasthani Hamaam. Are you available to talk? Can you provide more details and your location?");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:h-screen text-center px-4">
        <h1 className="text-black text-2xl lg:text-5xl hover:scale-105 font-bold mb-4">
          Rajasthani Hamaam – Elegant & Affordable Heating Solution
        </h1>
        <div className="mt-10">
          <h2 className="text-sm lg:text-2xl text-gray-800 font-bold">
            Experience the Beauty and Warmth of Rajasthani Hamaam
          </h2>
          <p className="text-xs lg:text-lg">
            The Rajasthani Hamaam is a stunning and cost-effective heating system, bringing traditional warmth to your home with a touch of elegance. Sourced directly from Rajasthan, this Hamaam is known for its shiny and attractive finish, making it a perfect blend of functionality and aesthetics.
          </p>
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row items-center justify-center bg-white py-10 px-6 lg:px-20 min-h-screen space-x-8'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 border rounded-xl shadow-xl p-3 w-full">
          <img src={image} alt="Rajasthani Hamaam" />
          <div>
            <p className='font-bold text-orange-800'>Rajasthani Hamaam</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Upgrade your home with a Rajasthani Hamaam and enjoy a warm and cozy winter at an unbeatable price!</p>
            <p>📞 Contact us now to get your custom installation!</p>
            <div className="mt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 hover:scale-105 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                Book Now 
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 border rounded-xl shadow-xl p-3 w-full space-y-4">
          <img src={image3} alt="Rajasthani Hamaam" className='h-[300px] lg:h-[470px] w-[600px]' />
          <div>
            <p className='font-bold text-orange-800'>Rajasthani Hamaam</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Upgrade your home with a Rajasthani Hamaam and enjoy a warm and cozy winter at an unbeatable price!</p>
            <p>📞 Contact us now to get your custom installation!</p>
            <div className="mt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 hover:scale-105 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                Book Now 
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Raj;
