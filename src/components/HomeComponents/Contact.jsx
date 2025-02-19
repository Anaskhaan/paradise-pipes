const Contact = () => {
  return (
    <div className=" bg-gray-300">
      <div className=" p-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left - Contact Form */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="lg:text-3xl xl:text-3xl text-xl font-bold xl:w-2/4 2xl:w-2/4 lg:w-2/4 w-full">
              Get a <span className="text-orange-500">Free Quote</span> to know
              more
            </h2>
            <form className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border bg-transparent focus:outline-none border-black rounded-md p-2 w-1/2"
                />
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="border bg-transparent focus:outline-none border-black rounded-md p-2 w-1/2"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border bg-transparent focus:outline-none border-black rounded-md p-2 w-full"
              />
              <textarea
                placeholder="Message"
                className="border bg-white focus:outline-none border-black rounded-md p-2 w-full h-24"
              ></textarea>
              <button className="bg-gray-900 text-white px-4 py-2">
                Send Now
              </button>
            </form>
          </div>

          {/* Right - Image & Line Design */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
            <div className="absolute w-[70%] h-[85%]  border-t-2 border-b-2 border-l-2 border-r-2 rounded-bl-[40%] border-[#0163BE] left-12 md:left-20 bottom-0 top-24 md:top-20"></div>
            <div className="absolute w-[65%] h-[80%] bg-[#0163BE] rounded-bl-[34%] bottom-0"></div>
            <img
              src="/builder.webp"
              alt="Construction Worker"
              className="relative z-10 w-[100%] object-contain h-[60vh] -ml-10 md:-ml-20 -mt-4 md:-mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
