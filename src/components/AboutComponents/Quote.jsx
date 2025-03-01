import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full max-w-9xl mx-auto bg-gray-700 text-white rounded-lg shadow-lg p-6 md:p-8 min-h-[500px]">
      <h2 className="text-center md:text-left text-2xl font-semibold text-white mb-6 md:mb-0 md:absolute md:-top-0 md:left-6 mt-8">
        Get ready to get the Quote
      </h2>

      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <form onSubmit={handleSubmit} className="w-full md:w-4/5 flex flex-col gap-4 px-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-300 text-gray-800 rounded-md focus:outline-none placeholder-gray-600"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-300 text-gray-800 rounded-md focus:outline-none placeholder-gray-600"
          />
          
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-300 text-gray-800 rounded-md focus:outline-none h-28 resize-none placeholder-gray-600"
          />
          
          <button 
            type="submit" 
            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium self-start"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 px-4">
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-orange-500" />
          <span className="text-sm">+928-612345</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail size={20} className="text-orange-500" />
          <span className="text-sm">info@paradisepipes.pk</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Globe size={20} className="text-orange-500" />
          <span className="text-sm">www.paradisepipes.com</span>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-orange-500 mt-1" />
          <span className="text-sm">
            Industrial Estate, Township Bannu, Khyberpakhtunkhwa.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
