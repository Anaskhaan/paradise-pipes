import AboutSection from "../components/AboutComponents/AboutSection";
import WhyUs from "../components/AboutComponents/WhyUs";

export default function AboutUs() {
  
  return (
    <div>
      {/* 1st Section */}
      <section>
        <div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/about-bg.webp')" }}
        >
          <div className="absolute top-1/3 left-16  ">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-white">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                Know About Us
              </h1>
          
            </div>
          </div>
        </div>
      </section>
   
      <AboutSection/>
      <WhyUs/>
       
      
    </div>
  );
}
