import Images from "../../assets/images";

const WhyUs = () => {
  return (
    <div>
      <section>
        {/* Header Section */}
        <div
          className="px-12 py-36 bg-[url('whyUs.png')] bg-cover bg-center"
        >
          <span className="text-white tracking-wider text-3xl font-bold">
            Why Us
          </span>
        </div>

        {/* Mission & Vision Section */}
        <div className="bg-[#f1f5fb] py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="text-[#003e75] font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To manufacture and deliver superior-quality PVC piping solutions that meet the
                evolving needs of infrastructure and construction industries — while ensuring
                reliability, sustainability, and customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-[#003e75] font-bold text-lg mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a globally recognized PVC pipe manufacturer known for innovation, quality,
                and responsible business practices — empowering infrastructure development for a
                better tomorrow.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] shadow-lg">
              <img
                src={Images.whyUsPeople}
                alt="PVC Workers at Factory"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-[#f1f5fb] py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={Images.coreValues}
              alt="Core Values Team"
              className="rounded shadow-md w-full max-w-[435px] h-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-[#003e75] flex space-x-3 items-center justify-center  font-bold text-lg mb-4  pb-1">
              <span className=' block w-64 h-[0.5px] rounded-full bg-[#003e75]' />
              <span className='text-md w-44'>
                Our Core Values
              </span>
              <span className=' block w-64 h-[0.5px] rounded-full bg-[#003e75]' />

            </h3>
            <ul className="text-gray-700 space-y-2">
              <li><b className="text-[#003e75]">Quality First:</b> We never compromise on quality — every product is engineered to last.</li>
              <li><b className="text-[#003e75]">Integrity:</b> We conduct our business with honesty, transparency, and accountability.</li>
              <li><b className="text-[#003e75]">Customer Focus:</b> Our clients are at the heart of everything we do.</li>
              <li><b className="text-[#003e75]">Innovation:</b> We embrace technology and new ideas to stay ahead of industry needs.</li>
              <li><b className="text-[#003e75]">Sustainability:</b> We are committed to environmentally responsible practices.</li>
              <li><b className="text-[#003e75]">Teamwork:</b> We believe in the power of collaboration — within our team and with our clients.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
