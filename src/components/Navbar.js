// Navbar.js
import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div data-aos="fade-right">
          <h1 className="text-xl font-bold">Your Logo</h1>
        </div>
        <div className="hidden sm:flex space-x-4">
          <div data-aos="fade-left">
            <a href="#b" className="hover:text-blue-500">Home</a>
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <a href="#b" className="hover:text-blue-500">About</a>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <a href="#b" className="hover:text-blue-500">Services</a>
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <a href="#b" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
        <div className="sm:hidden">
          <FaBars className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
