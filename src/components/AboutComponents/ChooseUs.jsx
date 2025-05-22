import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Shield, Award, Cog, Leaf, CheckCircle, Star, ArrowRight } from 'lucide-react';

const ChooseUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Superior Durability",
      description: "Our products are constructed using high-grade raw materials, ensuring exceptional tensile strength and impact resistance. They are built to withstand extreme conditions and provide long-lasting performance without degradation.",
      color: "from-blue-500 to-blue-600",
      stats: "25+ Years Lifespan"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Leakproof & Corrosion-Resistant",
      description: "Unlike metal pipes, our PVC pipes do not rust, corrode, or develop leaks over time. They maintain smooth internal surfaces, preventing blockages and ensuring efficient fluid flow for years to come.",
      color: "from-green-500 to-green-600",
      stats: "99.9% Leak-Free"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Precision Manufacturing & Advanced Technology",
      description: "We utilize state-of-the-art extrusion and molding technology to manufacture pipes with accurate dimensions, uniform thickness, and high pressure resistance. Each pipe undergoes rigorous quality control testing before reaching our customers.",
      color: "from-purple-500 to-purple-600",
      stats: "±0.1mm Precision"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry-Standard Compliance & Certifications",
      description: "Our pipes comply with national and international quality standards, ensuring safety, reliability, and eco-friendliness. We meet industry certifications for pressure resistance, chemical stability, and environmental sustainability.",
      color: "from-orange-500 to-orange-600",
      stats: "ISO 9001 Certified"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Innovative Design & Custom Solutions",
      description: "Our PVC pipes are available in a variety of sizes and configurations, engineered to meet the unique requirements of each project. We collaborate closely with our customers to develop bespoke solutions that maximize performance, efficiency, and aesthetic appeal.",
      color: "from-teal-500 to-teal-600",
      stats: "500+ Custom Designs"
    }
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
  };

  return (
    <div 
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-4">
          <Star className="w-5 h-5 text-[#EA6338]" />
          <span className="text-[#EA6338] font-semibold text-sm">Premium Quality Assured</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#EA6338] to-[#D45420] bg-clip-text text-transparent mb-4">
          Why Choose Us?
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We take pride in delivering premium-quality, high-durability PVC pipes that stand the test of time, 
          backed by cutting-edge technology and uncompromising quality standards.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image Section with Overlay */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#EA6338]/20 to-transparent rounded-2xl z-10"></div>
          <img
            src="/Rectangle 18.webp"
            alt="Worker with safety helmet in manufacturing facility"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Floating Stats */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#EA6338]">25+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#EA6338]">10K+</div>
                  <div className="text-xs text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#EA6338]">99%</div>
                  <div className="text-xs text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              Our premium PVC pipes are the result of advanced engineering combined with top-grade raw materials
              and state-of-the-art manufacturing processes. Manufactured using only the highest quality PVC resin
              and carefully selected additives, each pipe is crafted through cutting-edge extrusion and molding
              techniques that ensure consistent wall thickness, precise dimensions, and a smooth, leak-proof finish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every step of production is governed by rigorous quality control protocols, including comprehensive
              pressure tests and meticulous visual inspections, ensuring that only the most reliable products reach
              our customers. With a commitment to continuous innovation and long-term performance, our premium
              PVC pipes deliver unmatched durability and efficiency.
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-2 gap-4">
            {['Corrosion Resistant', 'Easy Installation', 'Cost Effective', 'Eco Friendly'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Key Advantages</h3>
        
        {/* Feature Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeFeature === index
                  ? 'bg-[#EA6338] text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {feature.icon}
              <span className="font-medium hidden sm:inline">{feature.title}</span>
            </button>
          ))}
        </div>

        {/* Active Feature Display */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center gap-3 p-3 rounded-xl  text-black mb-4`}>
                {features[activeFeature].icon}
                <span className="font-bold text-lg">{features[activeFeature].title}</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {features[activeFeature].description}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="bg-[#EA6338] text-white px-4 py-2 rounded-lg font-bold">
                  {features[activeFeature].stats}
                </div>
                <ArrowRight className="w-5 h-5 text-[#EA6338]" />
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-full h-64 bg-black   rounded-xl opacity-20`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-24 h-24 bg-gradient-to-br  rounded-full flex items-center justify-center text-white`}>
                  {React.cloneElement(features[activeFeature].icon, { className: 'w-12 h-12' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable FAQ Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Specifications</h3>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-gray-800">{feature.title}</span>
                </div>
                {expandedSection === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div className={`transition-all duration-300 ${
                expandedSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Key Metric: </span>
                    <span className="text-sm font-bold text-[#EA6338]">{feature.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-[#EA6338] to-[#D45420] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Premium Quality?</h3>
          <p className="text-lg opacity-90 mb-6">
            Join thousands of satisfied customers who trust our PVC pipes for their projects.
          </p>
          <button className="bg-white text-[#EA6338] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
            Get Your Quote Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;