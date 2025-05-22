import { ShieldCheck, HardHat, Droplet, Leaf, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Extreme Durability",
      description: "Engineered to resist corrosion, rust, and wear, ensuring a long-lasting and reliable performance in all conditions.",
      icon: ShieldCheck,
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Impact Resistance", 
      description: "Designed to withstand heavy impacts and pressure, preventing cracks and damage in demanding environments.",
      icon: HardHat,
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Leak-Proof",
      description: "Precision-sealed joints ensure a tight, leak-proof connection, reducing water loss and maintenance costs.",
      icon: Droplet,
      color: "blue",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Eco-Friendly",
      description: "Made from recyclable materials, PVC pipes support sustainability with low energy consumption and minimal waste.",
      icon: Leaf,
      color: "green", 
      gradient: "from-green-500 to-emerald-600"
    },
  ];

  return (
    <div className="bg-gray-50 p-8 md:p-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Zap size={16} />
          Advanced Technology
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Industry-Leading Features
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover why our PVC pipes are the preferred choice for professionals worldwide
        </p>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center relative">
                <h2 className="text-gray-800 font-bold text-xl mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              
              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180">
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
          <div className="text-gray-600 text-sm">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">10k+</div>
          <div className="text-gray-600 text-sm">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">99%</div>
          <div className="text-gray-600 text-sm">Quality Assurance</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
          <div className="text-gray-600 text-sm">Support Available</div>
        </div>
      </div>
    </div>
  );
};

export default Features;