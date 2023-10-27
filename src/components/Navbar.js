// src/components/Navbar.js
import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent z-10  ">
      <div data-aos="fade-right" className="text-2xl  text-white font-bold">
        Manukato Brands.
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#b" data-aos="fade-up" className="text-white hover:text-gray-300">Home</a>
        <a href="#b" data-aos="fade-up" className="text-white hover:text-gray-300">About</a>
        <a href="#b" data-aos="fade-up" className="text-white hover:text-gray-300">Services</a>
        <a href="#b" data-aos="fade-up" className="text-white hover:text-gray-300">Contact</a>
      </div>
      <div className="md:hidden">
        <FaBars className="text-white text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
