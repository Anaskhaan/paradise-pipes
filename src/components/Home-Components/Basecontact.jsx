import { ArrowRight } from "lucide-react";

const Basecontact = () => {
  return (
    <div className="p-6 md:p-12">
      <div className="bg-[url('/graypipes.webp')] relative bg-center p-4 lg:h-64 h-96 bg-cover flex flex-col justify-center items-center text-center">
        <h1 className="text-white font-bold text-xl lg:text-4xl xl:text-4xl 2xl:text-4xl  p-2">
          Let&apos;s Build Stronger, Smarter, and More Durable Solutions
        </h1>
        <p className="text-white w-full md:w-2/4 px-4 lg:text-lg text-sm md:px-0">
          Partner with <span className="text-[#EA6338]">PARADISE </span> for
          premium-quality PVC pipes that ensure durability, strength, and
          long-lasting performance. Get a customized quote for your next project
          today.
        </p>
        <button className="absolute bottom-6 md:bottom-12 right-6 md:right-10 bg-[#EA6338] rounded-3xl px-3 py-2 text-white flex items-center justify-center">
          Contact us <ArrowRight className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Basecontact;
