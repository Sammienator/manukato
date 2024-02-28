import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-8">Have any questions or inquiries? Feel free to reach out to us. We'd love to hear from you!</p>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
