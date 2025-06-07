import about from "../../assets/aboutimg.svg";

const WhyChooseUs = () => {
  return (
    <div className="p-6 md:p-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side - Image with Border */}
        <div className="relative w-full flex justify-center items-center">
          {/* Decorative Borders - Hide on small screens */}
          <div className="hidden md:block absolute top-0 left-16 w-[380px] h-[2px] bg-[#003E75]" />
          <div className="hidden md:block absolute bottom-0 left-16 w-[2px] h-36 bg-[#003E75]" />
          <div className="hidden md:block absolute bottom-0 left-16 w-48 h-[2px] bg-[#003E75]" />

          <img
            src={about}
            alt="Worker in factory"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm h-auto object-contain my-6 sm:my-8"
          />
        </div>

        {/* Right Side - Text Content */}
        <div>
          {/* Heading with Blue Line */}
          <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-bold">
            <h2 className="text-[#646866]">
              About{" "}
              <span className="text-[#003E75] tracking-wide font-orbitron">
                PARADISE
              </span>{" "}
              Pipes
            </h2>
            <div className="w-20 h-[2px] bg-[#003E75]" />
          </div>

          {/* Paragraphs */}
          <p className="text-[#646866] text-sm mt-4 leading-relaxed">
            Established in 2001, our company has been a trusted name in the
            industry, providing premium-quality materials to over 3,500
            satisfied customers. With years of experience, we have built a
            reputation for reliability, durability, and excellence. Our products
            are designed to meet the highest industry standards, ensuring that
            businesses and professionals receive only the best.
          </p>

          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            At the core of our company is a commitment to innovation, customer
            satisfaction, and continuous improvement. We invest in advanced
            technology, sustainable practices, and a skilled workforce to stay
            ahead in a competitive market. Our dedicated team works tirelessly
            to offer exceptional service and value.
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
