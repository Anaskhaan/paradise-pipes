import vector from "../../assets/2.svg";
import one from "../../assets/cable.svg";
import two from "../../assets/industrial.svg";
import three from "../../assets/agri.svg";
import four from "../../assets/drainge.svg";
import five from "../../assets/plumbing.svg";
import six from "../../assets/construction.svg";

const applications = [
  { title: "Plumbing Solutions", icon: five },
  { title: "Drainage Solutions", icon: four },
  { title: "Construction & Infrastructure", icon: six },
  { title: "Agricultural Solutions", icon: three },
  { title: "Industrial & Chemical Use", icon: two },
  { title: "Cable Protection", icon: one },
];

export const Banner = () => {
  return (
    <div className="relative w-full py-24 bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={vector}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white text-lg md:text-xl font-medium mb-12">
          Wide Range of Sizes & Applications:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {applications.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md border border-white/80 rounded-xl p-6 flex flex-col items-center justify-center min-h-[160px]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 mb-4"
              />
              <h3 className="text-[#646866] text-sm font-normal">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
