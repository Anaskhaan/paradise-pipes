const Features = () => {
  const features = [
    {
      title: "Extreme Durability",
      description:
        "Engineered from high-grade uPVC, these pipes are exceptionally tough and long-lasting. They resist cracks, dents, and wear even under heavy loads or extreme temperatures making them ideal for demanding construction and infrastructure projects.",
    },
    {
      title: "Leak Proof",
      description:
        "Designed with precision-molded joints and seamless connections, our PVC pipes ensure 100% leak-proof performance. Perfect for water supply, drainage, and industrial systems where reliability is critical and maintenance must be minimal.",
    },
    {
      title: "Eco-Friendly",
      description:
        "Manufactured using environmentally responsible processes and recyclable materials, these uPVC pipes help reduce carbon footprint. They offer a sustainable alternative to metal and non-recyclable plastics, aligning with modern green building standards.",
    },
  ];

  return (
    <div className="bg-[#eaf0fa] py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="text-blue-800 font-bold text-lg mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
