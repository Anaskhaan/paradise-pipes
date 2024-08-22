import Navbar from "../Navbar/Navbar";
import pipe from "../../assets/pipe.jpg";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="relative h-full">
        <div >
          <img src={pipe} className=" max-sm:object-cover sm:object-cover md:object-cover lg:object-cover h-screen w-full" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4" >
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold max-sm:text-3xl  ">Sustainability at the Core</h1>
          <p className=" sm:text-2xl md:text-3xl lg:text-3xl max-sm:text-2xl max-sm:px-7 sm:px-7 md:px-10">Eco-friendly PVC pipes designed to minimize environmental impact</p>
          <button className="bg-gray-100 text-slate-900 hover:bg-gray-800 hover:text-white text-3xl font-bold px-8 py-5 rounded-lg sm:text-xl max-sm:text-xl max-sm:py-3">Explore our Products</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
