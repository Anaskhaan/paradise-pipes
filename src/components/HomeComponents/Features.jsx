const features = [
  {
    title: "Extreme Durability",
    description:
      "Engineered to resist corrosion, rust, and wear, ensuring a long-lasting and reliable performance in all conditions.",
    image: "/placeholder.png", // Replace with actual image path
  },
  {
    title: "Impact Resistance",
    description:
      "Designed to withstand heavy impacts and pressure, preventing cracks and damage in demanding environments.",
    image: "/placeholder.png",
  },
  {
    title: "Leak-Proof",
    description:
      "Precision-sealed joints ensure a tight, leak-proof connection, reducing water loss and maintenance costs.",
    image: "/placeholder.png",
  },
  {
    title: "Eco-Friendly",
    description:
      "Made from recyclable materials, PVC pipes support sustainability with low energy consumption and minimal waste.",
    image: "/placeholder.png",
  },
];

const Features = () => {
  return (
    <div className="p-6 sm:p-12">
      <h1 className="text-black flex items-center justify-center 2xl:text-3xl xl:text-3xl lg:text-3xl text-xl font-bold mb-8">
        Industry-Leading Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Image Placeholder */}
            <div className="w-16 h-16 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

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
