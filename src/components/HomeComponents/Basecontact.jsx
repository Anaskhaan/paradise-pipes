import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cta from "../../assets/ctaimg.svg";

const Basecontact = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${cta})` }}
        className="relative  bg-center bg-cover  h-[450px] md:h-[350px] flex flex-col justify-center items-center text-center"
      >
        {/* Text Content Centered */}
        <h1 className="text-white text-[20px] md:text-[32px] font-bold mb-4 px-4 leading-snug">
          Get Your Quote Today
        </h1>

        {/* Contact Us Button - Bottom Right */}
        <Link
          to="/ContactUs"
          className="flex  w-full px-4 flex-row justify-center"
        >
          <button className="   bg-white text-[#134697] rounded-md px-6 py-2 text-sm font-medium flex items-center gap-2 hover:bg-[#134697] hover:text-white transition">
            Contact us
            <ArrowRight size={18} className="mt-0.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Basecontact;
