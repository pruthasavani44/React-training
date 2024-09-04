// Navbar.js
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">Micra</a>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="text-white hover:text-gray-400">
            Home
          </a>
          <div className="relative">
            <button className="text-white hover:text-gray-400 focus:outline-none">
              Services
              <svg
                className="w-4 h-4 inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute hidden mt-2 bg-white text-black rounded-md shadow-lg group-hover:block">
              <a href="/" className="block px-4 py-2">
                Service 1
              </a>
              <a href="/" className="block px-4 py-2">
                Service 2
              </a>
              <a href="/" className="block px-4 py-2">
                Service 3
              </a>
            </div>
          </div>
          <a href="/" className="text-white hover:text-gray-400">
            About Us
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            Case Study
          </a>
          <a href="/" className="text-white hover:text-gray-400">
            Blog
          </a>
          <a
            href="/"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
