import VisionSection from "../components/AboutComponents/VisionSection";
import ManufacturingProcess from "../components/AboutComponents/ManufacturingProcess";
import ChooseUs from "../components/AboutComponents/ChooseUs";
import ApplicationSize from "../components/AboutComponents/ApplicationSize";
import MeetProfessionals from "../components/AboutComponents/MeetProfessionals";
import Quote from "../components/AboutComponents/Quote";

export default function AboutUs() {
  
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
   
      <ChooseUs/>
      <ManufacturingProcess/>
       <ApplicationSize/>
       <VisionSection />
       <MeetProfessionals/>
       <Quote />
      
    </div>
  );
}
