import React from 'react';
import { motion } from 'framer-motion';

import Cons from '../assets/cons.jpg';
import tile from '../assets/Tile.jpg';
import demo from '../assets/Demo.jpg';

const Hero = () => {
  

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:h-screen text-center px-4">
        <h1 className="text-black text-2xl lg:text-5xl hover:scale-105 font-bold mb-4">Other Categories – Explore More 🏗️🔥</h1>
        <div className="mt-10">
          <h2 className="text-xl text-gray-800">Discover more about Hamaam construction, installation process, and different Hamaam types available for your home, mosque, or business.</h2>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center  py-10 px-6 lg:px-20 min-h-screen space-x-8'>
        <motion.div 
          className="lg:w-1/2 border shadow-xl p-3 w-full" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }}>
          <img src={Cons} className='h-[300px] lg:h-[270px]' />
          <div>
            <p className='font-bold text-orange-800'>📌 Hamaam Construction Process 🏗️</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>See how a traditional Hamaam is built step by step. We provide high-quality stone, expert craftsmanship, and durable materials to ensure long-lasting performance.<br /></p>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 border shadow-xl p-3 w-full space-y-4" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }}>
          <img src={tile} className='h-[260px] lg:h-[310px] w-[600px]' />
          <div>
            <p className='font-bold text-orange-800'>Rajasthani Tiles for Path</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Upgrade your path with Rajasthani Tiles and enjoy an unbeatable price!<br /></p>
          </div>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 border shadow-xl p-3 w-full space-y-4" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 2 }}>
          <img src={demo} className='h-[260px] lg:h-[330px] w-[600px]' />
          <div>
            <p className='font-bold text-orange-800'>Customized Hamaams</p>
            <p className='font-bold text-sm'>Order Yours Today!</p>
            <p>Tailor-made sizes and designs to fit your space.<br /></p>
          </div>
        </motion.div>
      </div>

     
    </div>
  );
};

export default Hero;