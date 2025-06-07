import vector from "../../assets/Rectangle.svg";
import { pipeFeatures } from "../../Helpers/Data";

const Pipesch = () => {


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
