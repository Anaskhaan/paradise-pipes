const ProductRange = () => {
  const features = [
    {
      title: "2 inch PVC Pipes",
      description: "High Quality material for your home supply.",
      image: "/placeholder.png", // Replace with actual image path
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
    <div className="p-12">
      <h1 className=" text-4xl font-bold mb-4">Our Product Range:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9]  p-6 flex flex-col items-center text-center"
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
      <div className=" flex items-center justify-center mt-4">
        <button className="bg-[#252E3D] px-4 py-2 text-white ">
          View all Products
        </button>
      </div>
    </div>
  );
};

export default ProductRange;
