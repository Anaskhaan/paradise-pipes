const Contact = () => {
  return (
    <div className="bg-white w-full py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left - Contact Form */}
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl font-bold mb-8">
              Get a <span className="text-[#EA6338]">Free Quote</span> to know more
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
                <div className="w-full">
                  <label className="block mb-2 text-[#252E3D]">Name</label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-md shadow-xl focus:outline-none bg-white"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-[#252E3D]">Mobile No</label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-md shadow-xl focus:outline-none bg-white"
                  />
                </div>
              </div>


              <div className="w-full">
                <label className="block mb-2 text-[#252E3D]">Email</label>
                <input
                  type="email"
                  className="w-full p-4 rounded-md shadow-xl focus:outline-none bg-white"
                />
              </div>


              <div className="w-full">
                <label className="block mb-2 text-[#252E3D]">Message</label>
                <textarea
                  className="w-full p-12 rounded-md shadow-xl focus:outline-none bg-white h-38"
                ></textarea>
              </div>


              <div>
                <button className="bg-[#252E3D] text-white px-12 py-5 rounded-md">
                  Send Now
                </button>
              </div>
            </form>
          </div>


          {/* Right - Image & Line Design */}
          <div className="relative w-full md:w-1/2 md:h-[650px] h-[500px] mt-16  flex  md:justify-end">
            <div className="relative w-[80%] md:w-full flex justify-center">
              <div className="absolute w-[80%] md:w-[75%] h-[68%] md:h-[68%] border-2 border-[#EA6338] rounded-bl-[40%] right-0 md:right-12 top-10"></div>
              <div className="absolute w-[75%] md:w-[70%] h-[70%] md:h-[70%] bg-[#EA6338] rounded-bl-[40%] right-0 md:right-12 top-0"></div>
              <img
                src="/Rectangle 98.webp"
                alt="Construction Worker"
                className="absolute w-[80%] md:w-[85%] h-[78%] md:h-[83%] object-center right-0 md:right-12 -top-20 md:-top-24 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
