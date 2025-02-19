import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10 p-6 md:p-12">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          <span className="text-[#EA6338]">PARADISE</span> Vision
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our vision is to be a leading innovator in the PVC pipes industry,
          setting new standards in quality, durability, and sustainability.
          <br />
          We strive to continuously enhance our manufacturing processes,
          ensuring top-tier products that meet the evolving needs of our
          customers.
          <br />
          With a strong commitment to excellence and customer satisfaction, we
          envision a future where our PVC solutions contribute to safer
          infrastructure, efficient water management, and long-lasting
          construction projects.
          <br />
          By embracing innovation and sustainable practices, we aim to build a
          legacy of trust, reliability, and superior performance in every
          product we deliver.
        </p>
      </div>

      {/* Image with Animated Border */}
      <div className="md:w-1/2 relative">
        {/* Animated Border */}
        <motion.div
          initial={{ rotate: 0, scale: 1 }}
          animate={{ rotate: -5, scale: 1.05 }}
          transition={{ duration: 1,}}
          className="absolute top-3 left-3 w-96 h-full border-4 border-[#EA6338] rounded-md z-0"
        ></motion.div>

        {/* Image */}
        <img
          src="/vision.webp"
          alt="Vision"
          className="relative w-full h-auto rounded-md shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default VisionSection;
