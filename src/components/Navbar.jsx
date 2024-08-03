import React from 'react';
import logo from "../assets/portfolio.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  // Google Drive link to your resume
  const resumeLink = "https://drive.google.com/file/d/1mbrg6P-vF2p8fOJPk_y4xypsHMiA6yvM/view?usp=sharing";

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ml-4 relative group">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="w-14" />
        </a>
        {/* Tooltip */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-24 text-center text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Resume
        </div>
      </div> 
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bhushan-jadhao-5b2606254/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white" />
        </a>
        <a href="https://github.com/BhushanJadhao" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white" />
        </a>
        <a href="https://x.com/Bhushan17408702" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white" />
        </a>
        <a href="https://www.instagram.com/itsbrjpatil/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
