import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
            <i className="fas fa-perfume text-4xl text-pink-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Designer Perfumes</h3>
            <p className="text-gray-600">Discover our exclusive collection of designer perfumes.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
            <i className="fas fa-shopping-bag text-4xl text-purple-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Bags</h3>
            <p className="text-gray-600">Explore our range of stylish and trendy bags.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="600">
            <i className="fas fa-lipstick text-4xl text-red-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Lipsticks</h3>
            <p className="text-gray-600">Find the perfect shade of lipstick to complement your style.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="800">
            <i className="fas fa-makeup-brush text-4xl text-yellow-500 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Makeup</h3>
            <p className="text-gray-600">Browse through our makeup collection for a flawless look.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
