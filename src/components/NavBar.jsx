import { useState } from "react";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background py-6 px-5 lg:px-32 font-Satoshi">
      <div className="flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex lg:space-x-8 xl:space-x-16">
          <a href="#" className="text-white py-2">
            Home
          </a>
          <a href="#" className="text-white py-2">
            View Meals
          </a>
          <a href="#" className="text-white py-2">
            Calculate Macros
          </a>
          <a href="#" className="text-white py-2">
            Meal Generator
          </a>
          <button className="text-white font-bold py-2 px-8 border-2 border-white">
            Shop Now
          </button>
        </div>
        <div className="lg:hidden">
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
        <div className="lg:hidden px-4">
          <a href="#" className="block text-white py-2">
            Home
          </a>
          <a href="#" className="block text-white py-2">
            View Meals
          </a>
          <a href="#" className="block text-white py-2">
            Calculate Macros
          </a>
          <a href="#" className="block text-white py-2">
            Meal Generator
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
