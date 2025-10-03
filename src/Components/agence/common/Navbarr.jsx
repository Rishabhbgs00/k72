import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-4 z-10">
    
      <Link to="/">
        <img
          src={reactLogo}
          alt="React Logo"
          className="w-20 h-auto"
        />
      </Link>

      <div className="flex space-x-8 text-white font-semibold text-lg drop-shadow-md">
        <Link to="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-gray-300 transition">
          Projects
        </Link>
        <Link to="/agence" className="hover:text-gray-300 transition">
          Agence
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
