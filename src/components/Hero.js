import React, {useEffect} from 'react';
import { FaPlay } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import manu4 from '../assets/manu4.jpg'; // Import your hero image

const HeroSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div
      className="h-screen  bg-no-repeat bg-cover bg-overlay flex items-center justify-center"
      style={{ backgroundImage: `url(${manu4})` }}
    >
      <div className="container mx-auto   text-center">
        <h1 className="text-6xl font-bold underline text-white mt-36" data-aos="fade-down " data-aos-delay="300">
          Welcome To Manukato Brands.
        </h1>
        <p  className="mt-4 text-white text-3xl font-bold" data-aos="fade-up" data-aos-delay="200">
        "Indulge in the essence of elegance. Discover your unique fragrance at Manukato Brands and let your scent inspire the world. Elevate your senses today!"
        </p>
        <div className="mt-8 flex justify-center space-x-6" data-aos="fade-up">
          <a
             href="#about"
             target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            <FaPlay className="inline mr-2" />
           View Our Perfumes.
          </a>
          <a
          href="https://wa.me/c/254700405228"
          target="_blank"
           
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            <FaPlay className="inline mr-2" />
            Contact Us.
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
