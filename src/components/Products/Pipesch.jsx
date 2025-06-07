import vector from "../../assets/Rectangle.svg";

const Pipesch = () => {
  const pipeFeatures = [
    {
      title: "Exceptional Durability",
      description:
        "Our uPVC pipes are built to last. Engineered from high-grade unplasticized PVC, they resist physical wear, heavy loads, and external pressure — ensuring long-term performance even in demanding conditions.",
    },
    {
      title: "Leak-Proof Construction",
      description:
        "Thanks to precision joints and uniform wall thickness, our pipes guarantee a leak-free connection system, minimizing water loss and system failure.",
    },
    {
      title: "Corrosion and Chemical Resistance",
      description:
        "Unlike metal alternatives, PVC pipes do not corrode or react with most chemicals, making them ideal for transporting potable water, industrial fluids, or corrosive substances.",
    },
    {
      title: "Lightweight & Easy to Install",
      description:
        "PVC pipes are significantly lighter than metal or concrete alternatives, reducing transportation costs and enabling quick, hassle-free installations with basic tools.",
    },
    {
      title: "UV & Weather Resistant",
      description:
        "With built-in UV stabilization, our pipes withstand prolonged exposure to sunlight, humidity, and temperature fluctuations without degradation or discoloration.",
    },
    {
      title: "Eco-Friendly and Recyclable",
      description:
        "Our pipes are free from hazardous plasticizers and can be recycled after use — making them a sustainable choice for long-term infrastructure.",
    },
  ];

  return (
    <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto leading-normal">
      {/* Left section */}
      <div>
        <div className=" bg-white flex items-center">
          <div className="w-24 bg-gray-600 h-[2px]"></div>
          <h1 className="text-[#134697] font-bold text-md">
            Pipe Characteristics
          </h1>
        </div>
        <div>
          <span className="text-[#646866] text-sm">
            Highlighting the features that make our PVC pipes a top choice for
            engineers, contractors, and industry professionals.
          </span>
          <div>
            {pipeFeatures.map((feature, index) => (
              <div key={index} className="">
                <h3 className="text-md font-bold text-[#134697]">
                  {feature.title}
                </h3>
                <p className="text-[#646866] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="flex items-center justify-center">
        <img src={vector} />
      </div>
    </div>
  );
};

export default Pipesch;
