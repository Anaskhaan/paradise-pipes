import hero from "../../assets/heroimg.svg";

const Hero = () => {
  return (
    <div
      className="relative  bg-center bg-contain bg-no-repeat flex items-center justify-center h-screen w-full"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Left Shadow Overlay */}

      {/* Content */}
      <div className="relative flex flex-col items-start  space-y-4  px-6 md:px-12 lg:px-24 xl:px-32 text-left">
        <h1 className="text-white w-full  font-bold text-xl sm:text-4xl md:text-5xl">
          Premium Quality{" "}
          <span className="text-[#134697] font-orbitron">PVC Pipes</span> for
          Durable Infrastructure
        </h1>
        <p className="text-white w-full text-lg sm:text-xl md:w-2/3">
          Manufacturing high-performance PVC pipes from 2-inch to 14-inch for
          reliable plumbing and industrial solutions.
        </p>
        <div>
          <button className="bg-[#134697] text-white px-6 py-2 rounded-md hover:bg-[#] transition">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
