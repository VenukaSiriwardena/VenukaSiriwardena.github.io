import React, { useState } from 'react';  // Ensure React and useState are imported

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 bg-opacity-70 p-8 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold dela-gothic-one-regular">
          Venuka Siriwardena
        </div>

        <div className="hidden md:flex space-x-16">
          <a href="/" className="font-bold text-lg text-white hover:text-purple-800">HOME</a>
          <a href="/#about" className="font-bold text-lg text-white hover:text-purple-800">ABOUT</a>
          <a href="/#projects" className="font-bold text-lg text-white hover:text-purple-800">PROJECTS</a>
          <a href="/#contact" className="font-bold text-lg text-white hover:text-purple-800">CONTACT</a>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-70 p-4">
          <a href="#" className="block text-white py-2">HOME</a>
          <a href="#" className="block text-white py-2">ABOUT</a>
          <a href="#" className="block text-white py-2">PROJECTS</a>
          <a href="#" className="block text-white py-2">CONTACT</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;