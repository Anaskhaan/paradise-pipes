import qua from "../../assets/quality.svg";

const Quality = () => {
  return (
    <div className="bg-white px-6 py-10 md:px-20 md:py-14 space-y-10">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left Text Content */}
        <div className="space-y-4 ">
          <div className="flex items-center  space-x-2">
            <div className="h-[3px] w-36 bg-gray-500"></div>
            <h2 className="text-center text-[#134697] font-bold text-xl py-2">
              Quality Of Our Products
            </h2>
          </div>

          <h3 className="text-blue-900 font-bold text-lg">
            At our manufacturing facility, quality is more than a commitment –
            <br />
            it is our priority,
          </h3>

          <p className="text-gray-800 text-sm leading-relaxed">
            At our PVC production facility, quality is more than a commitment –
            It is our priority, rigorous quality control is an rvideal part of
            production to ensure a high performance material across etistrusion
            to final QC Inspection, we ou-control its entire oubit.
          </p>

          <ul className="list-disc pl-5 text-sm text-blue-900 space-y-1">
            <li className="font-semibold">
              Our dedicated QC team uses{" "}
              <span className="font-normal text-gray-800">
                numerous teeting equipment to verity:
              </span>
            </li>
            <li>Leak and pressure resistance</li>
            <li>Heat and impact resistance</li>
            <li>Weight tolerance under various enviroeivental conditions</li>
          </ul>

          <p className="text-gray-800 text-sm leading-relaxed">
            Using rigorous inspection standards, we approve high-durability
            productsst that sursure high-durability proodutigh-performance
            piping.
          </p>
        </div>

        {/* Right Image */}

        <div className="relative w-fit mx-auto mt-4">
          {/* Top-left horizontal line */}
          <div className="absolute top-0  w-[400px] h-[2px] bg-[#134697]"></div>

          {/* Top-left vertical line */}

          {/* Image */}
          <img src={qua} alt="Worker in warehouse" className="p-4" />

          {/* Bottom-right horizontal line */}
          <div className="absolute bottom-0  left-0 w-[70%] h-[2px] bg-[#134697]"></div>

          {/* Bottom-right vertical line */}
          <div className="absolute bottom-0  left-0 w-[2px] h-[40px] bg-[#134697]"></div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
