
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Liladhar<span className="text-tech-blue">.dev</span>
            </h2>
            <p className="text-gray-400 mt-2">IT Support Specialist | Technical Support Specialist</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Liladhar Sapkota. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-red-500" />
            <span>in Sydney, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
