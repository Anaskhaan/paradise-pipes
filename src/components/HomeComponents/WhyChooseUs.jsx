const WhyChooseUs = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-[#000000] font-bold text-lg uppercase">About <span className="text-[#EA6338] font-
Bitsumishi">Paradise </span> Pipes</h2>
          <p className="text-gray-700 mt-2">
          Established in 2001, our company has been a trusted name in the industry, providing premium-quality materials to over 3,500 satisfied customers. With years of experience, we have built a reputation for reliability, durability, and excellence. Our products are designed to meet the highest industry standards, ensuring that businesses and professionals receive only the best. Whether it's large-scale projects or specialized needs, we take pride in delivering solutions that drive success.
          </p>
          <p className="text-gray-700 mt-2">
          At the core of our company is a commitment to innovation, customer satisfaction, and continuous improvement. We invest in advanced technology, sustainable practices, and a skilled workforce to stay ahead in a competitive market. Our dedicated team works tirelessly to offer exceptional service, ensuring that every client experiences efficiency, quality, and value. As we move forward, we remain focused on expanding our reach and enhancing our offerings, maintaining our position as an industry.
          </p>
         
          {/* Key Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white shadow-md p-4 rounded-lg text-center flex-1 min-w-[100px]">
              <h3 className="text-xl font-bold">24+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-center flex-1 min-w-[100px]">
              <h3 className="text-xl font-bold">5,000+</h3>
              <p className="text-gray-600 text-sm">Mega Projects</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg text-center flex-1 min-w-[100px]">
              <h3 className="text-xl font-bold">98%</h3>
              <p className="text-gray-600 text-sm">Customer Satisfaction</p>
            </div>
          </div>
        </div>


        {/* Right Side - Image */}
        <div>
          <img
            src="/Rectangle 82.webp"
            alt="Worker in factory"
            className="w-full "
          />
        </div>
      </div >
     
      {/* Show More Button Centered */}
      <div className="mt-6 flex justify-center">
        <button className="bg-gray-900 text-white px-12 py-4 rounded-md flex items-center gap-2 hover:bg-gray-700">
          Show More <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </div>
  );
};


export default WhyChooseUs;
