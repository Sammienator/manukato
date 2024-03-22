import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              className="h-24 w-auto mx-auto"
              src="service1.jpg"
              alt="Service 1"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Service 1
            </h3>
            <p className="text-gray-600 mt-2">
              Description of Service 1. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Service 2 */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              className="h-24 w-auto mx-auto"
              src="service2.jpg"
              alt="Service 2"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Service 2
            </h3>
            <p className="text-gray-600 mt-2">
              Description of Service 2. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Service 3 */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              className="h-24 w-auto mx-auto"
              src="service3.jpg"
              alt="Service 3"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Service 3
            </h3>
            <p className="text-gray-600 mt-2">
              Description of Service 3. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* Service 4 */}
          <div
            className="p-6 bg-white rounded-lg shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              className="h-24 w-auto mx-auto"
              src="service4.jpg"
              alt="Service 4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Service 4
            </h3>
            <p className="text-gray-600 mt-2">
              Description of Service 4. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
