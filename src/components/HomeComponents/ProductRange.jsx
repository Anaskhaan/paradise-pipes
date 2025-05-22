import { ArrowRight, Zap } from "lucide-react";

const ProductRange = () => {
  const features = [
    {
      title: "2 inch PVC Pipes",
      description: "High Quality material for your home supply.",
      image: "/placeholder.png",
    },
    {
      title: "4 inch PVC Pipes", 
      description: "High Quality material for your home supply.",
      image: "/placeholder.png",
    },
    {
      title: "6 inch PVC Pipes",
      description: "High Quality material for your home supply.",
      image: "/placeholder.png",
    },
    {
      title: "8 inch PVC Pipes",
      description: "High Quality material for your home supply.",
      image: "/placeholder.png",
    },
  ];

  return (
    <div className="p-8 md:p-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Zap size={16} />
          Premium Quality
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Product Range
        </h1>
        <div className="w-20 h-1 bg-gray-800 mx-auto rounded-full"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl mx-auto flex items-center justify-center group-hover:bg-gray-800 transition-all duration-300 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-14 h-14 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight size={12} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-gray-800 font-bold text-xl mb-3 group-hover:text-gray-900 transition-colors duration-300">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover Line */}
            <div className="mt-6 h-1 w-0 bg-gray-800 mx-auto rounded-full group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="inline-block relative group">
          <div className="absolute inset-0 bg-gray-800 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          <button className="relative bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 hover:gap-4 shadow-lg hover:shadow-xl">
            View all Products
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;