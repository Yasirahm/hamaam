import { FaLinkedin, FaYoutube, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" h-full bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© AH Hamaam Constructions &trade; | All Rights Reserved | Powered by AH Hamaam
        <p>📍 Location: Hajin Bandipora | 📧 ratherseenu16@gmail.com</p></p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/yasir-hamid-3a961925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-500 transition-transform transform hover:scale-110">
            <FaLinkedin size={28} />
          </a>
          <a href="https://youtube.com/@codewithyasirweb?si=N9kwstVJRvvkMUax" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-transform transform hover:scale-110">
            <FaYoutube size={28} />
          </a>
          
          <a href="https://github.com/Yasirahm/sigma-web" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-110">
            <FaGithub size={28} />
          </a>

          <a href="https://www.facebook.com/share/17eHBQGS2G/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-transform transform hover:scale-110">
          <FaFacebook size={28} />
          </a>
          <a href="mailto:ratherseenu16@gmail.com" className="hover:text-orange-400 transition-transform transform hover:scale-110">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center py-4  text-white text-sm">
  <p class="flex items-center text-gray-900 mt-10 space-x-2">
    <span>Designed & Created by</span> 
    <a href="https://yasirhamid.netlify.app/">
    <span class="font-semibold hover:text-blue-700 text-green-600 hover:text-underline">Yasir Hamid</span></a>
  </p>
  
</div>

    </footer>
  );
};

export default Footer;
