import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>

        {/* Perfumes */}
        <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-right">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Designer Perfumes</h3>
            <p className="text-gray-600">Explore our collection of exquisite designer perfumes.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="perfume.jpg" alt="Perfume" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Bags */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-8" data-aos="fade-left">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bags</h3>
            <p className="text-gray-600">Discover our collection of trendy designer bags.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="bag.jpg" alt="Bag" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Lipstick */}
        <div className="flex flex-col md:flex-row items-center mb-8" data-aos="fade-right">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lipstick</h3>
            <p className="text-gray-600">Find your perfect shade with our range of lipsticks.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="lipstick.jpg" alt="Lipstick" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        {/* Makeup */}
        <div className="flex flex-col md:flex-row-reverse items-center" data-aos="fade-left">
          <div className="md:w-1/2 p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Makeup</h3>
            <p className="text-gray-600">Enhance your beauty with our quality makeup products.</p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="makeup.jpg" alt="Makeup" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
