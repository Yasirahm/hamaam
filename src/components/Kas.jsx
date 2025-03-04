import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/Kas.jpg';

import image1 from '../assets/Raj.jpg';
import image3 from '../assets/Kas2.jpg';
import image2 from '../assets/Raj2.jpg';
import { useParams, useNavigate } from "react-router-dom";
import Header from './Header';

const Kas = () => {
  
  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center justify-center lg:h-screen text-center px-4">
        <h1 className="text-black text-2xl lg:text-5xl hover:scale-105 font-bold mb-4">
          Kashmiri Hamaam – The Traditional Warmth for Your Home
        </h1>
        <div className="mt-10">
          <h2 className="text-sm lg:text-2xl text-gray-800 font-bold">
            Authentic Kashmiri Heating Solution from Gundi Saderkoot Bala
          </h2>
          <p className="text-xs lg:text-lg">
            The Kashmiri Hamaam is a time-honored heating system, sourced from Gundi Saderkoot Bala, known for its durability, efficiency, and elegant look. It is specially designed to withstand extreme winters, providing consistent and long-lasting warmth to your home.
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
          <img src={image} alt="Kashmiri Hamaam" />
          <div className='p-2'>
            <p className='font-bold text-orange-800'>Kashmiri Hamaam</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Experience the authentic warmth of a Kashmiri Hamaam and make your winters more comfortable.</p>
            <p>📞 Contact us now to get your custom installation!</p>
           
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 border rounded-xl shadow-xl p-3 w-full space-y-4">
          <img src={image3} alt="Kashmiri Hamaam" className='h-[300px] lg:h-[410px] w-[600px]' />
          <div className='p-2'>
            <p className='font-bold text-orange-800'>Kashmiri Hamaam</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Experience the authentic warmth of a Kashmiri Hamaam and make your winters more comfortable.</p>
            <p>📞 Contact us now to get your custom installation!</p>
           
          </div>
        </motion.div>
      </div>
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
                <img src={image1} alt="Rajasthani Hamaam" />
                <div>
                  <p className='font-bold text-orange-800'>Rajasthani Hamaam</p>
                  <p className='font-bold text-sm'>Order Yours Today!</p>
                  <p>Upgrade your home with a Rajasthani Hamaam and enjoy a warm and cozy winter at an unbeatable price!</p>
                  <p>📞 Contact us now to get your custom installation!</p>
                 
                </div>
              </motion.div>
      
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="lg:w-1/2 border rounded-xl shadow-xl p-3 w-full space-y-4">
                <img src={image2} alt="Rajasthani Hamaam" className='h-[300px] lg:h-[470px] w-[600px]' />
                <div>
                  <p className='font-bold text-orange-800'>Rajasthani Hamaam</p>
                  <p className='font-bold text-sm'>Order Yours Today!</p>
                  <p>Upgrade your home with a Rajasthani Hamaam and enjoy a warm and cozy winter at an unbeatable price!</p>
                  <p>📞 Contact us now to get your custom installation!</p>
                  
                </div>
              </motion.div>
            </div>
          </div>
    </div>
  );
};

export default Kas;
 