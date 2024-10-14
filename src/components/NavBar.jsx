import { useState } from "react";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background p-6 font-Satoshi">
      <div className="container flex justify-between items-center px-5">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#" className="text-white py-2">
            Home
          </a>
          <a href="#" className="text-white py-2">
            About
          </a>
          <a href="#" className="text-white py-2">
            Services
          </a>
          <a href="#" className="text-white py-2">
            Contact
          </a>
          <button className="text-white font-bold py-2 px-8 border-2 border-white">
            Shop Now
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-white py-2 px-4">
            Home
          </a>
          <a href="#" className="block text-white py-2 px-4">
            About
          </a>
          <a href="#" className="block text-white py-2 px-4">
            Services
          </a>
          <a href="#" className="block text-white py-2 px-4">
            Contact
          </a>
          <button className="text-white font-bold py-2 px-8 border-2 border-white">
            Shop Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
