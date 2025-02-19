import VisionSection from "../components/AboutComponents/VisionSection";

export default function AboutUs() {
  return (
    <div>
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

      <section>
        <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold">
              About <span className="text-red-500">PARADISE</span> Pipes
            </h2>
            <p className="mt-4 text-gray-700 text-sm md:text-base">
              Established in 2001, our company has been a trusted name in the
              industry, providing premium-quality materials to over 3,500
              satisfied customers. With years of experience, we have built a
              reputation for reliability, durability, and excellence. Our
              products are designed to meet the highest industry standards,
              ensuring that businesses and professionals receive only the best.
              Whether it&apos;s large-scale projects or specialized needs, we
              take pride in delivering solutions that drive success.
            </p>
            <p className="mt-4 text-gray-700 text-sm md:text-base">
              At the core of our company is a commitment to innovation, customer
              satisfaction, and continuous improvement. We invest in advanced
              technology, sustainable practices, and a skilled workforce to stay
              ahead in a competitive market. Our dedicated team works tirelessly
              to offer exceptional service, ensuring efficiency, quality, and
              value. As we move forward, we remain focused on expanding our
              reach and enhancing our offerings, maintaining our position as an
              industry leader.
            </p>

            {/* Image Placeholders */}
            <div className="mt-6 flex space-x-4">
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-end">
            <div className="relative">
              <img
                src="/aboutman.webp" // Replace with actual image path
                alt="Worker"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gray-200 opacity-20"></div>{" "}
              {/* Background overlay effect */}
            </div>
          </div>
        </div>
        <VisionSection />
      </section>
    </div>
  );
}
