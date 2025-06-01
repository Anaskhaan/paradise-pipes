import about from "../../assets/aboutimg.svg";

const WhyChooseUs = () => {
  return (
    <div className="p-6 md:p-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side - Image with Border */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Top Line */}
          <div className="absolute top-0 left-16 w-[380px] h-[2px]  bg-[#003E75]" />
          {/* Left Line */}
          <div className="absolute bottom-0 left-16 w-[2px] h-36 bg-[#003E75]" />
          {/* Bottom Line */}
          <div className="absolute bottom-0 left-16 w-48 h-[2px] bg-[#003E75]" />

          <img
            src={about}
            alt="Worker in factory"
            className="w-full h-[440px] max-w-sm object-contain my-8"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          {/* Heading with Blue Line */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <h2 className="text-gray-900 ">
              About{" "}
              <span className="text-[#003E75] tracking-wide font-orbitron">
                PARADISE
              </span>{" "}
              Pipes
            </h2>
            <div className="w-20 h-[2px] bg-[#003E75]" />
          </div>

          {/* Paragraphs */}
          <p className="text-gray-700 text-sm mt-4">
            Established in 2001, our company has been a trusted name in the
            industry, providing premium-quality materials to over 3,500
            satisfied customers. With years of experience, we have built a
            reputation for reliability, durability, and excellence. Our products
            are designed to meet the highest industry standards, ensuring that
            businesses and professionals receive only the best. Whether it's
            large-scale projects or specialized needs, we take pride in
            delivering solutions that drive success.
          </p>

          <p className="text-gray-700 text-sm mt-4">
            At the core of our company is a commitment to innovation, customer
            satisfaction, and continuous improvement. We invest in advanced
            technology, sustainable practices, and a skilled workforce to stay
            ahead in a competitive market. Our dedicated team works tirelessly
            to offer exceptional service, ensuring that every client experiences
            efficiency, quality, and value. As we move forward, we remain
            focused on expanding our reach and enhancing our offerings,
            maintaining our position as an industry leader.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-[#003E75] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#002B54] transition">
              Show More <span className="text-lg">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
