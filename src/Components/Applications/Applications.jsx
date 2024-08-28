import factory from "../../assets/factory.jpg";
import industrial from "../../assets/SVG/industrial.svg";
import { useState } from "react";
const Applications = () => {
  const [cards] = useState([
    {
      id: 1,
      heading: "Industrial",
      paragraph:
        "Designed for factories, warehouses, and heavy-duty applications.",
      imageUrl: industrial,
    },
    {
      id: 2,
      heading: "Residential",
      paragraph: "Ideal for home water supply, drainage, and plumbing needs.",
      imageUrl: industrial,
    },
    {
      id: 3,
      heading: "Commercial",
      paragraph:
        "Suitable for office buildings, malls, and large-scale facilities.",
      imageUrl: industrial,
    },
    {
      id: 4,
      heading: "Infrastructure",
      paragraph:
        "Perfect for large infrastructure projects and public utilities.",
      imageUrl: industrial,
    },
  ]);

  return (
    <div className="relative p-6 bg-gray-100" id="applications">
      <div className="absolute inset-0 z-0">
        <img
          src={factory}
          alt="Factory Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 relative z-10 mb-9 items-center bg-slate-950 rounded-lg p-10   md:mx-36 bg-opacity-70">
        <h2 className=" font-bold text-white text-5xl sm:text-4xl max-sm:text-4xl">Applications</h2>
        <p className=" text-white text-lg">
          Our PVC pipes are versatile and ideal for various applications,
          including residential water supply, sewage systems, irrigation,
          electrical conduits, and industrial uses. They efficiently deliver
          clean water, transport wastewater, and withstand harsh chemicals.
          Additionally, they play a crucial role in fire protection and septic
          systems
        </p>
      </div>
      <div className="relative z-10 container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-300 border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.imageUrl}
              alt={card.heading}
              className="w-full h-40 object-fill bg-slate-900 "
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.heading}
              </h2>
              <p className="text-gray-600">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
