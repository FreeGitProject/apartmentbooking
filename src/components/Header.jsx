// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-900">LuxeStay</h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
        <a href="#" className="text-blue-600 font-medium">Apartments</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Locations</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
      </nav>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Sign In</button>
      </div>
    </div>
  </header>
  //    <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-6">
  //    <div className="flex items-center">
  //      <span className="text-2xl font-bold text-white">LuxeStay</span>
  //    </div>
  //    <div className="hidden md:flex space-x-8 text-white">
  //      <a href="#" className="hover:text-blue-300 transition">Home</a>
  //      <a href="#" className="hover:text-blue-300 transition">Apartments</a>
  //      <a href="#" className="hover:text-blue-300 transition">Locations</a>
  //      <a href="#" className="hover:text-blue-300 transition">About Us</a>
  //      <a href="#" className="hover:text-blue-300 transition">Contact</a>
  //    </div>
  //    <div>
  //      <button className="bg-white text-blue-900 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition">Sign In</button>
  //    </div>
  //  </nav>
  );
};

export default Header;