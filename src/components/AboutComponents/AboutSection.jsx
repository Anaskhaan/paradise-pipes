import { AboutStats } from "../../Helpers/Data";

const AboutSection = () => {
  return (
    <div className="p-6 md:p-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side - Image with Border */}

        <div>
          {/* Heading with Blue Line */}
          <div className="flex items-center gap-2">
            <h2 className="text-[#003E75] font-semibold text-xl">
              About Us <hr />
            </h2>
            <div className="w-20 h-[2px] bg-[#003E75]" />
          </div>

          {/* Paragraphs */}
          <p className="text-gray-700 text-sm mt-4">
            <span className="text-[#003E75] font-semibold text-xl">We</span> are
            proud to be a trusted name in the PVC piping industry, known for our
            commitment to quality, reliability, and innovation. With years of
            experience and a skilled workforce, we manufacture a wide range of
            high-performance uPVC pipes designed for lasting durability and
            unmatched efficiency. From humble beginnings to becoming a preferred
            supplier for engineers, contractors, and government projects, our
            journey reflects our passion for excellence. Our factory is equipped
            with cutting-edge technology and follows stringent quality assurance
            processes to ensure every pipe meets both national and international
            standards.
          </p>

          <p className="text-gray-700 text-sm mt-4">
            We serve residential, commercial, agricultural, and industrial
            sectors with complete confidence in our products’ performance under
            the most demanding conditions. Our corrosion-resistant, leak-proof,
            and weatherproof pipes stand as a symbol of trust and technical
            precision. We believe that progress is not just in numbers but in
            impact — that’s why we also emphasize environmental sustainability,
            producing eco-friendly products that reduce long-term maintenance
            and environmental footprint
          </p>
          <div className="flex space-x-6  mt-3 ">
            {AboutStats.map((stat, index) => (
              <div key={index}>
                <div className="border border-b-4 flex flex-col items-center justify-center rounded-md border-gray-300 p-6">
                  <p className="text-[#003e75] font-semibold text-lg ">
                    {stat.number}
                  </p>
                  <h2 className="text-gray-800 text-xs">{stat.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Text Content */}

        <div className="relative w-full h-full flex justify-center items-center">
          {/* Top Line */}
          <div className="absolute top-8 right-16 w-[200px] h-[2px]  bg-[#003E75]" />
          {/* Left Line */}
          <div className="absolute bottom-[215px] right-16 w-[2px] h-64 bg-[#003E75]" />
          <div className="absolute bottom-8  left-16 w-[2px] h-36 bg-[#003E75]" />
          {/* Bottom Line */}
          <div className="absolute bottom-8 left-16 w-64 h-[2px] bg-[#003E75]" />

          <img
            src="aboutus-section.webp"
            alt="Worker in factory"
            className="w-full h-[440px] max-w-sm object-contain my-8"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
