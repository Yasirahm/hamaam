import React from 'react';
import Raj1 from '../assets/Kas.jpg';
import Footer from './Footer';
import Feedback from './Feedback';

const About = () => {
  return (
    <div className="text-center mt-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 text-gray-600 font-bold">
          About Us – Bringing You the Best Traditional Heating Solutions
        </h1>
        <hr className="m-2 border bg-orange-400" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center text-gray-800 py-6 md:py-10">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full space-y-3 md:space-y-4">
          <p className="text-gray-700 text-sm sm:text-base">Assalamualaikum السَّلامُ عَلَيْكُمْ</p>
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            👉 Who We Are
          </h1>
          
          <p className="text-gray-800 text-xs sm:text-sm md:text-base">
            Abdul Hamid Hamaam Constructions specializes in high-quality Kashmiri and Rajasthani Hamaam heating systems to keep your home warm and comfortable during harsh winters. With a commitment to authenticity, affordability, and customer satisfaction, we bring you the best traditional heating solutions at reasonable prices.
            <br /><br />
            
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
          <img src={Raj1} alt="Hamaam" className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Features Section */}
      <p className='text-xs sm:text-sm md:text-base leading-relaxed'>
        <span className="font-bold">Why Choose Our Hamaam Heating System?</span><br />
        ✅ <span className="font-semibold">Efficient and Long-Lasting Heat</span> – Natural stone-based heating that retains warmth for hours.<br />
        ✅ <span className="font-semibold">Traditional yet Modern</span> – Time-tested heating methods with high durability and efficiency.<br />
        
      </p>
      <div className='mt-10'>
<Feedback/>
      <Footer />
      </div>
    </div>
  );
};

export default About;
