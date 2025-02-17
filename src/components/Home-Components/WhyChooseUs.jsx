const WhyChooseUs = () => {
  return (
    <div className=" p-12   bg-gray-200">
      <h2 className="text-[rgb(234,99,56)] font-semibold text-lg">
        Why Choose Us?
      </h2>
      <h1 className="lg:text-2xl xl:text-2xl 2xl:text-2xl text-lg font-bold mt-2">
        We take pride in delivering premium-quality, high-durability PVC pipes
        that stand the test of time.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Side - Image */}
        <div>
          <img
            src="/whychooseus.webp"
            alt="PVC Pipes Manufacturing"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-black">Superior Durability:</h3>
            <p>
              Our PVC pipes are engineered using high-grade raw materials,
              ensuring exceptional tensile strength and impact resistance. They
              are built to withstand extreme conditions and provide long-lasting
              performance without degradation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black">
              Leakproof & Corrosion-Resistant:
            </h3>
            <p>
              Unlike metal pipes, our PVC pipes do not rust, corrode, or develop
              leaks over time. They maintain smooth internal surfaces,
              preventing blockages and ensuring efficient fluid flow for years
              to come.
            </p>
          </div>
          <div>
            <h3 className="text-black font-semibold">
              Precision Manufacturing & Advanced Technology:
            </h3>
            <p>
              We utilize state-of-the-art extrusion and molding technology to
              manufacture pipes with accurate dimensions, uniform thickness, and
              high-pressure resistance. Each pipe undergoes rigorous quality
              control testing before reaching our customers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black">
              Industry-Standard Compliance & Certifications:
            </h3>
            <p>
              Our pipes comply with national and international quality
              standards, ensuring safety, reliability, and eco-friendliness. We
              meet industry certifications for pressure resistance, chemical
              stability, and environmental sustainability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-black">
              Industry-Standard Compliance & Certifications:{" "}
            </h3>
            <p>
              Our pipes comply with national and international quality
              standards, ensuring safety, reliability, and eco-friendliness. We
              meet industry certifications for pressure resistance, chemical
              stability, and environmental sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text Section */}
      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold">Wide Range of Sizes & Applications:</h3>
        <p className="text-gray-700">
          From 2 inches to 14 inches, our pipes are designed for diverse
          applications, including: Plumbing & Drainage Systems: Reliable and
          leakproof solutions for residential and commercial use. Construction &
          Infrastructure: High-strength pipes for large-scale building projects.
          Agriculture & Irrigation: Efficient water distribution for farms and
          landscapes. Industrial & Chemical Use: Corrosion-resistant pipes for
          demanding industrial environments.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
