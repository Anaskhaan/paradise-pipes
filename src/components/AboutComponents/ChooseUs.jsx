import React from 'react';


const ChooseUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-[#EA6338] mb-2">Why Choose Us?</h2>
      <p className="text-lg text-gray-800 mb-6">
        We take pride in delivering premium-quality, high-durability PVC pipes that stand the test of time.
      </p>
     
     
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Image Section */}
        <div className="">
          <img
            src="/Rectangle 18.webp"
            alt="Worker with safety helmet in manufacturing facility"
            className="w-full rounded-md"
            loading="lazy"
            height={400}
            width={400}
          />
        </div>
       
        <div className="md:w-2/3">
          <div className="space-y-6">
            <div className="text-sm">
              <p className="text-gray-700">
                Our premium PVC pipes are the result of advanced engineering combined with top-grade raw materials
                and state-of-the-art manufacturing processes. Manufactured using only the highest quality PVC resin
                and carefully selected additives, each pipe is crafted through cutting-edge extrusion and molding
                techniques that ensure consistent wall thickness, precise dimensions, and a smooth, leak-proof finish.
                Designed to withstand harsh environmental conditions, our pipes offer exceptional resistance to
                corrosion, chemical degradation, impact, and wear, making them ideal for a wide range of applications
                —from residential water supply and drainage systems to industrial processes and large-scale
                infrastructure projects.
              </p>
              <p className="text-gray-700 mt-4">
                Every step of production is governed by rigorous quality control protocols, including comprehensive
                pressure tests and meticulous visual inspections, ensuring that only the most reliable products reach
                our customers. With a commitment to continuous innovation and long-term performance, our premium
                PVC pipes deliver unmatched durability and efficiency, providing exceptional value and peace of mind
                for every project.
              </p>
            </div>
           
            <div>
              <h3 className="font-bold text-gray-800">Superior Durability:</h3>
              <p className="text-gray-700 text-sm">
                Our products are constructed using high-grade raw materials, ensuring exceptional tensile strength and impact resistance. They
                are built to withstand extreme conditions and provide long-lasting performance without degradation.
              </p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Additional content sections below the image */}
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-gray-800">Leakproof & Corrosion-Resistant:</h3>
          <p className="text-gray-700 text-sm">
            Unlike metal pipes, our PVC pipes do not rust, corrode, or develop leaks over time. They maintain smooth
            internal surfaces, preventing blockages and ensuring efficient fluid flow for years to come.
          </p>
        </div>
       
        <div>
          <h3 className="font-bold text-gray-800">Precision Manufacturing & Advanced Technology:</h3>
          <p className="text-gray-700 text-sm">
            We utilize state-of-the-art extrusion and molding technology to manufacture pipes with accurate dimensions,
            uniform thickness, and high pressure resistance. Each pipe undergoes rigorous quality control testing before
            reaching our customers.
          </p>
        </div>
       
        <div>
          <h3 className="font-bold text-gray-800">Industry-Standard Compliance & Certifications:</h3>
          <p className="text-gray-700 text-sm">
            Our pipes comply with national and international quality standards, ensuring safety, reliability, and eco-
            friendliness. We meet industry certifications for pressure resistance, chemical stability, and environmental
            sustainability.
          </p>
        </div>
       
        <div>
          <h3 className="font-bold text-gray-800">Innovative Design & Custom Solutions:</h3>
          <p className="text-gray-700 text-sm">
            Our PVC pipes are available in a variety of sizes and configurations, engineered to meet the
            unique requirements of each project. We collaborate closely with our customers to develop
            bespoke solutions that maximize performance, efficiency, and aesthetic appeal.
          </p>
        </div>
      </div>
    </div>
  );
};


export default ChooseUs;

