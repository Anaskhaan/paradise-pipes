import { ArrowRight } from "lucide-react";
import p1 from "../../assets/2inch.svg";
import p2 from "../../assets/6inch.svg";
import p3 from "../../assets/8inch.svg";
import p4 from "../../assets/14inch.svg";

// import { ArrowRight } from "lucide-react";

const ProductRange = () => {
  const features = [
    {
      title: "2 Inch PVC Pipes",
      description: "High Quality material for your home supply",
      image: p1, // Replace with real paths
    },
    {
      title: "6 Inch PVC Pipes",
      description: "High Quality material for your home supply",
      image: p2,
    },
    {
      title: "8 Inch PVC Pipes",
      description: "High Quality material for your home supply",
      image: p3,
    },
    {
      title: "14 Inch PVC Pipes",
      description: "High Quality material for your construction supply",
      image: p4,
    },
  ];

  return (
    <div className="px-4 py-12 md:px-16 lg:px-24 bg-[#e8f0fa]">
      {/* Section Heading */}
      <h2 className="text-center text-[20px] font-semibold text-[#134697] mb-10">
        Explore the wide range of Our Products
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-md shadow hover:shadow-md transition duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="text-center p-4">
              <h3 className="text-sm font-semibold text-[#134697]">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button className="bg-[#134697] hover:bg-[#103a76] text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 mx-auto transition">
          View all Products
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductRange;
