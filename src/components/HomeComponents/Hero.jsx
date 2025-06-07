import hero from "../../assets/heroimg.svg";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={hero}
        alt="PVC Pipes"
        className="w-full h-[500px] object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col items-start space-y-4 text-left">
          <h1 className="text-white font-bold text-xl sm:text-4xl md:text-5xl">
            Premium Quality{" "}
            <span className="text-[#134697] font-orbitron">PVC Pipes</span> for
            Durable Infrastructure
          </h1>
          <p className="text-white text-lg sm:text-xl md:w-2/3">
            Manufacturing high-performance PVC pipes from 2-inch to 14-inch for
            reliable plumbing and industrial solutions.
          </p>
          <div>
            <button className="bg-[#134697] text-white px-6 py-2 rounded-md hover:bg-[#0f3c7c] transition">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
