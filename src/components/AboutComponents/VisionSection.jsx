import React, { useState, useEffect, useRef } from 'react';
import { Eye, Target, Award, Users, Lightbulb, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  // Vision points data
  

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  
  return (
    <div 
      ref={sectionRef}
      className={`max-w-7xl mx-auto p-6 md:p-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-4">
          <Eye className="w-5 h-5 text-[#EA6338]" />
          <span className="text-[#EA6338] font-semibold text-sm">Our Vision</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          <span className="bg-gradient-to-r from-[#EA6338] to-[#D45420] bg-clip-text text-transparent">
            PARADISE
          </span>{' '}
          Vision
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-[#EA6338] to-[#D45420] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Enhanced Text Content */}
        <div className="lg:w-1/2 space-y-8">
          {/* Main Vision Statement */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our vision is to be a <span className="font-bold text-[#EA6338]">leading innovator</span> in the PVC pipes industry,
              setting new standards in quality, durability, and sustainability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['Quality Excellence', 'Innovation Leader', 'Customer Focus', 'Sustainability'].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed">
              We envision a future where our PVC solutions contribute to safer infrastructure, 
              efficient water management, and long-lasting construction projects, building a 
              legacy of trust and superior performance.
            </p>
          </div>

          {/* Interactive Vision Points */}
        
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#EA6338] to-[#D45420] rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6" />
              <h4 className="text-lg font-bold">Join Our Vision</h4>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Be part of our journey towards building a sustainable and innovative future in PVC manufacturing.
            </p>
            <button className="bg-white text-[#EA6338] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Enhanced Image Section */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Multiple Animated Borders */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer rotating border */}
              <div 
                className={`absolute w-80 h-96 md:w-96 md:h-[500px] border-4 border-[#EA6338] rounded-lg transition-all duration-1000 ${
                  isVisible ? 'rotate-[-5deg] scale-105' : 'rotate-0 scale-100'
                } ${isHovered ? 'rotate-[-8deg] scale-110' : ''}`}
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(234, 99, 56, 0.1) 70%)',
                }}
              ></div>
              
              {/* Inner pulsing border */}
            
            </div>

            {/* Main Image with Overlay Effects */}
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
              <img
                src="/vision.webp"
                alt="Paradise Vision - Leading PVC Pipe Innovation"
                className={`relative w-80 h-96 md:w-96 md:h-[500px] object-cover rounded-lg shadow-2xl transition-all duration-500 ${
                  isHovered ? 'scale-105 shadow-3xl' : ''
                }`}
                loading="lazy"
              />
              
              {/* Floating Achievement Badge */}
             

              {/* Bottom Stats Overlay */}
            
            </div>

            {/* Decorative Elements */}
          </div>
        </div>
      </div>

      {/* Bottom Section - Vision Impact */}
      <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision Impact</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through our vision, we&apos;  re not just manufacturing pipes - we're building the foundation for tomorrow's infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: '1M+', label: 'Meters Installed', icon: <Target className="w-6 h-6" /> },
            { number: '500+', label: 'Cities Served', icon: <Users className="w-6 h-6" /> },
            { number: '99.9%', label: 'Quality Rate', icon: <Award className="w-6 h-6" /> },
            { number: '24/7', label: 'Support', icon: <Eye className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#EA6338] to-[#D45420] rounded-full text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#EA6338] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;