import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MeetProfessionals = () => {
  const professionals = [1, 2, 3, 4, 5, 6];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? professionals.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= professionals.length - 3 ? 0 : prev + 1));
  };

  return (
    <div>
      <section className="py-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Meet our Professionals
          </h2>
          <div className="relative w-full flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-8 h-8 text-gray-500" />
            </button>

            {/* Carousel Items */}
            <div className="flex gap-6 overflow-hidden justify-center w-full">
              {professionals.slice(index, index + 3).map((_, i) => (
                <div
                  key={i}
                  className="w-60 h-60 md:w-72 md:h-72 bg-gray-300  flex-shrink-0 shadow-md"
                ></div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-md hover:shadow-lg"
            >
              <ChevronRight className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetProfessionals;
