import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[url('/Rectangle-2.webp')] bg-center bg-cover">
      {/* Left Shadow Overlay */}
      <div className="absolute inset-y-0 left-0 w-full bg-[url('/shadow-image.webp')] bg-cover bg-left opacity-70"></div>

      {/* Content */}
      <div className="relative flex flex-col items-start space-y-4 px-6 sm:px-12 md:px-24 py-32 md:py-56">
        <h1 className="text-white w-full md:w-2/3 font-bold text-3xl sm:text-4xl md:text-5xl">
          Premium Quality <span className="text-black">PVC Pipes</span> for Durable Infrastructure
        </h1>
        <p className="text-white w-full text-lg sm:text-xl md:w-1/3">
          Manufacturing high-performance PVC pipes from 2-inch to 14-inch for reliable plumbing and industrial solutions.
        </p>
        <div>
          <button className="bg-[#EA6338] text-white px-6 py-2 rounded-md hover:bg-[#d0542f] transition">
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
