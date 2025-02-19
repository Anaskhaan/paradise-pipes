import VisionSection from "../components/AboutComponents/VisionSection";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutUs() {
  const applications = [
    "Plumbing Solutions",
    "Drainage Solutions",
    "Construction & Infrastructure",
    "Agricultural Solutions",
    "Industrial & Domestic Use",
    "Cable Protection",
  ];

  const professionals = [1, 2, 3, 4, 5, 6];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? professionals.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= professionals.length - 3 ? 0 : prev + 1));
  };

  const manufacturingSteps = [
    {
      image: "/raw.webp", // Update with the correct image path
      title: "Raw Material Selection",
      description:
        "Premium grade PEEK resins and additives are carefully assessed and selected.",
    },
    {
      image: "/precise.webp", // Update with the correct image path
      title: "Precise Mixing",
      description:
        "Computer-controlled mixing ensures perfect compound consistency.",
    },
    {
      image: "/quality.webp", // Update with the correct image path
      title: "Quality Testing",
      description:
        "Rigorous testing at every stage ensures product excellence.",
    },
  ];

  return (
    <div>
      {/* 1st Section */}
      <section>
        <div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/about-bg.webp')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-white">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
                Excellence in{" "}
                <span className="text-gray-300">PVC Manufacturing</span>
              </h1>
              <p className="mt-3 text-sm md:text-lg text-gray-300 max-w-lg">
                Leading the industry with innovative solutions and
                uncompromising quality since 1986. We transform raw materials
                into reliable infrastructure that builds the future.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd Section */}
      <section className="p-6 max-w-5xl mx-auto ">
        <h2 className="text-red-600 font-bold text-lg">Why Choose Us?</h2>
        <p className="text-lg font-semibold mt-2">
          We take pride in delivering premium-quality, high-durability PVC pipes
          that stand the test of time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="md:col-span-1">
            <img
              src="/aboutman.webp"
              alt="PVC Manufacturing"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="font-bold text-gray-800">Superior Durability:</h3>
              <p className="text-gray-700">
                Our PVC pipes are engineered using high-quality raw materials,
                ensuring exceptional resistance to high pressure, weather
                conditions, and external impacts.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Leak-proof & Corrosion-Resistant:
              </h3>
              <p className="text-gray-700">
                Built to withstand corrosion and prevent leaks, our pipes
                provide long-term benefits. They maintain smooth internal
                surfaces for efficient fluid flow.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Precision Manufacturing & Advanced Technology:
              </h3>
              <p className="text-gray-700">
                Manufactured with state-of-the-art machinery and stringent
                quality controls, our pipes feature uniform thickness, smooth
                edges, and consistent diameter.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Industry-Standard Compliance & Certifications:
              </h3>
              <p className="text-gray-700">
                Our products meet national and international quality standards,
                passing rigorous safety and performance tests.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800">
                Innovative Designs & Custom Solutions:
              </h3>
              <p className="text-gray-700">
                From standard to custom-built solutions, we engineer our pipes
                for various industrial, commercial, and household needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd Section */}
      <div className="flex justify-center items-center min-h-screen ">
        <section className="w-[70%] mx-auto py-6 bg-gray-100 shadow-lg rounded-lg">
          <h2 className="text-center text-lg font-bold text-gray-800 mb-4">
            Wide Range of Sizes & Applications:
          </h2>

          <div className="grid grid-cols-3 gap-x-4 gap-y-4 p-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="w-full aspect-square border border-gray-200 hover:border-blue-500 
          flex items-center justify-center text-center bg-white shadow-md rounded-lg transition-all duration-300"
              >
                <p className="text-gray-800 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 4th Section */}
      <section className="py-10">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Meet our Professionals</h2>
          <div className="relative w-full max-w-3xl flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-gray-500" />
            </button>

            {/* Carousel Items */}
            <div className="flex gap-4 overflow-hidden justify-center w-full">
              {professionals.slice(index, index + 3).map((_, i) => (
                <div
                  key={i}
                  className="w-40 h-40 bg-gray-300 rounded-md flex-shrink-0"
                ></div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </section>
      {/* 5th Section */}
      <section>
        <div className="w-full flex flex-col items-center py-10">
          <h2 className="text-lg font-semibold mb-6">
            Our Manufacturing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {manufacturingSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-14 h-14 mb-4"
                />
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <VisionSection />
      </section>
    </div>
  );
}
