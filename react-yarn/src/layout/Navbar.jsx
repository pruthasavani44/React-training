import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white my-2 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <a href="/" className="flex items-center py-4 px-2">
                Micra
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/"
                className="py-4 px-2 text-gray-500 hover:text-gray-800 transition duration-300"
              >
                Home
              </a>
              <a
                href="/services"
                className="py-4 px-2 text-gray-500 hover:text-gray-800 transition duration-300"
              >
                Services
              </a>
              <a
                href="/about"
                className="py-4 px-2 text-gray-500 hover:text-gray-800 transition duration-300"
              >
                About
              </a>
              <a
                href="/contact"
                className="py-4 px-2 text-gray-500 hover:text-gray-800 transition duration-300"
              >
                Contact
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <a
                href="/login"
                className="py-2 px-3 bg-gray-800 text-white rounded hover:bg-gray-500 transition duration-300"
              >
                Login
              </a>
              <a
                href="/signup"
                className="py-2 px-3 bg-gray-800 text-white rounded hover:bg-gray-500 transition duration-300"
              >
                Sign Up
              </a>
            </div>
            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-800"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} mobile-menu`}>
          <a
            href="/"
            className="block py-2 px-4 text-sm text-gray-500 hover:text-gray-800"
          >
            Home
          </a>
          <a
            href="/services"
            className="block py-2 px-4 text-sm text-gray-500 hover:text-gray-800"
          >
            Services
          </a>
          <a
            href="/about"
            className="block py-2 px-4 text-sm text-gray-500 hover:text-gray-800"
          >
            About
          </a>
          <a
            href="/contact"
            className="block py-2 px-4 text-sm text-gray-500 hover:text-gray-800"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
