import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, Sparkles, CheckCircle } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

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
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  return (
    <div className="relative w-full mb-4  mx-auto bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-orange-500/5 to-gray-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 md:p-12">
        {/* Header with Icon */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-orange-200 bg-clip-text text-transparent mb-4">
            Get Your Quote Today
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your project? Let's connect and bring your vision to life with our premium solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-orange-400 flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send Us a Message
              </h3>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className="w-full p-4 bg-gray-600/50 backdrop-blur-sm text-white rounded-xl border-2 border-gray-500/50 focus:border-orange-500 focus:outline-none placeholder-gray-400 transition-all duration-300 hover:bg-gray-600/70"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="w-full p-4 bg-gray-600/50 backdrop-blur-sm text-white rounded-xl border-2 border-gray-500/50 focus:border-orange-500 focus:outline-none placeholder-gray-400 transition-all duration-300 hover:bg-gray-600/70"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="5"
                    className="w-full p-4 bg-gray-600/50 backdrop-blur-sm text-white rounded-xl border-2 border-gray-500/50 focus:border-orange-500 focus:outline-none placeholder-gray-400 transition-all duration-300 hover:bg-gray-600/70 resize-none"
                  />
                  {focusedField === 'message' && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 animate-bounce" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message Now
                      </>
                    )}
                  </span>
                  {!isSubmitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-orange-500/10 to-gray-700/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 shadow-xl h-full">
              <h3 className="text-2xl font-semibold mb-8 text-orange-400">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone Number</p>
                    <p className="text-white font-medium">+928-612345</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email Address</p>
                    <p className="text-white font-medium">info@paradisepipes.pk</p>
                  </div>
                </div>
                
                {/* Website */}
                <div className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Globe className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Website</p>
                    <p className="text-white font-medium">www.paradisepipes.com</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="group flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-medium leading-relaxed">
                      Industrial Estate, Township Bannu, Khyberpakhtunkhwa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-orange-400 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span>We&apos;re here to help 24/7</span>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;