import React from "react";
import logo from "../../assets/dl-logo.png"; // Pastikan Anda mengganti logo.png dengan path logo Anda

const Navbar = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Dolphin Laundry Logo" className="h-16 w-20" />
          <h1 className="text-lg font-bold">Dolphin Laundry</h1>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#location" className="hover:text-yellow-300">Location</a></li>
          <li><a href="#feedback" className="hover:text-yellow-300">Feedback</a></li>
        </ul>

        {/* Join Now Button */}
        {/* <button className="hidden md:block bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">
          Join Now
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden bg-blue-600 text-white">
        <ul className="space-y-2 text-center py-4">
          <li><a href="#home" className="block hover:text-yellow-300">Beranda</a></li>
          <li><a href="#about" className="block hover:text-yellow-300">Tentang</a></li>
          <li><a href="#location" className="block hover:text-yellow-300">Location</a></li>
          <li><a href="#feedback" className="block hover:text-yellow-300">Feedback</a></li>
          {/* <li>
            <button className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500">
              Join Now
            </button>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
