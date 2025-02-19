import { ShieldCheck, HardHat, Droplet, Leaf } from "lucide-react";

const features = [
  {
    title: "Extreme Durability",
    description:
      "Engineered to resist corrosion, rust, and wear, ensuring a long-lasting and reliable performance in all conditions.",
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
  },
  {
    title: "Impact Resistance",
    description:
      "Designed to withstand heavy impacts and pressure, preventing cracks and damage in demanding environments.",
    icon: <HardHat className="w-12 h-12 text-yellow-600" />,
  },
  {
    title: "Leak-Proof",
    description:
      "Precision-sealed joints ensure a tight, leak-proof connection, reducing water loss and maintenance costs.",
    icon: <Droplet className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Eco-Friendly",
    description:
      "Made from recyclable materials, PVC pipes support sustainability with low energy consumption and minimal waste.",
    icon: <Leaf className="w-12 h-12 text-green-600" />,
  },
];

const Features = () => {
  return (
    <div className="p-6 sm:p-12">
      <h1 className="text-black flex items-center justify-center text-xl sm:text-3xl font-bold mb-8">
        Industry-Leading Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Lucide Icon */}
            <div className="mb-4">{feature.icon}</div>

            {/* Feature Title */}
            <h2 className="text-black font-semibold text-lg">
              {feature.title}
            </h2>

            {/* Feature Description */}
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
