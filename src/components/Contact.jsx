import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import Header from './Header';

const Contact = () => {
  return (
    <div>
      <Header/>

      <div className="bg-white ml-2  text-black   text-center">
                <h2 className="text-4xl text-orange-500  font-bold mb-4">Get In Touch</h2>
                <hr className="bg-orange-600 rounded-lg  p-1 w-30 mx-auto mb-4" />
                <p className="text-gray-700 text-xl mb-6">
                  Feel free to reach out for collaboration or inquiries!
                </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 border-2 shadow-2xl  p-5">
                <form className=" space-y-5 border shadow-lg p-5">
                  <div className="text-left">
                    <label htmlFor="name" className="text-xl font-bold text-black">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-xl hover:scale-105 border focus:ring-2 focus:ring-orange-500 transition"
                    />
                  </div>
      
                  <div className="text-left">
                    <label htmlFor="email" className="text-xl font-bold text-black">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full p-3 rounded-xl hover:scale-105 border focus:ring-2 focus:ring-orange-500 transition"
                    />
                  </div>
      
                  <div className="text-left">
                    <label htmlFor="message" className="text-xl font-bold text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full p-3 rounded-xl hover:scale-105 border focus:ring-2 focus:ring-orange-500 transition"
                      rows="4"
                    />
                  </div>
      
                  <div className="text-center hover:scale-105 mt-4">
              <a
                href="https://www.facebook.com/share/17eHBQGS2G/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500  text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                Send Message 
              </a>
            </div>
                </form>
                <div className="max-w-md mx-auto space-y-4 border w-full lg:w-screen  p-5 rounded-lg shadow-lg">
            {/* Address Section */}
            <div className=" p-4 w-full  rounded-lg shadow hover:scale-105 flex items-start space-x-4">
              <span className=" text-2xl">📍</span>
              <div >
                <h2 className="font-bold text-lg">Address</h2>
                <p className="text-gray-800">
                  Gund Saderkote, hajin Bandipora <br />
                  Jammu and Kashmir, India
                </p>
              </div>
            </div>
      
            {/* Email Section */}
            <div className=" p-2 rounded-lg shadow hover:scale-105 flex items-start space-x-2">
              <span className="text-blue-500 text-xl">✉️</span>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">Mail</h2>
                <a href="mailto:ratherseenu16@gmail.com" className="text-blue-500  hover:underline">
                  ratherseenu16@gmail.com
                </a>
              </div>
            </div>
      
            {/* LinkedIn Section */}
            <div className=" p-4  rounded-lg shadow hover:scale-105 flex items-start space-x-4">
              <span className="text-green-300 text-2xl">🔗</span>
              <div>
                <h2 className="font-bold text-black text-lg">Facebook</h2>
                <a
                  href="https://www.facebook.com/share/17eHBQGS2G/"
      
                  
                
                  className="text-blue-500 hover:underline"
                >
                  Visit Facebook Page
                </a>
              </div>
            </div>
          </div>
              </div>
              </div>
              <div className='text-center'><span className='text-xl font-bold'>🕒 Business Hours:</span><br></br>
8:00 AM – 8:00 PM
</div>
              
          <div className="flex justify-center items-center mt-10">
            <a href="#top" className="text-orange-500 text-4xl m-10 lg:text-6xl hover:text-blue-400 transition-colors duration-300">
            <FaArrowAltCircleUp />
            </a>
          </div>
      <div className='text-center mb-10'><span className='text-xl  lg:text-2xl font-bold'>Our Products</span><br></br>
🔥 Kashmiri Hamaam – Compact, highly durable, and comes with a warranty.<br></br>
🔥 Rajasthani Hamaam – Larger, more polished, and budget-friendly but does not include a warranty.</div>
    </div>
  )
}

export default Contact