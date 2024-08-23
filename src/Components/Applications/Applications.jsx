import { useState } from "react";
import factory from "../../assets/factory.jpg";
import industrial from "../../assets/SVG/industrial.svg";

const Applications = () => {
  const [cards] = useState([
    {
      id: 1,
      heading: "Industrial",
      paragraph:
        "Designed for factories, warehouses, and heavy-duty applications.",
    },
    {
      id: 2,
      heading: "Residential",
      paragraph:
        " Ideal for home water supply,drainage, and plumbing and every need. ",
    },
    {
      id: 3,
      heading: "Commercial",
      paragraph:
        " Suitable for office buildings, malls, and large-scale facilities. ",
    },
    {
      id: 4,
      heading: "Infrastructure",
      paragraph:
        " Suitable for office buildings, malls, and large-scale facilities. ",
    },
  ]);

  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-full">
        <img
          src={factory}
          alt="Factory Image"
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col absolute top-0 left-0 right-0 bottom-0 items-center justify-center">
          {/* heading & paragraph div */}
          <div className="flex flex-col items-center justify-center mx-48 text-center gap-2 bg-slate-800 bg-opacity-80 p-10  rounded-lg mt-10">
            <h2 className="text-white text-4xl font-bold ">Applications</h2>
            <p className="text-white text-xl font-semibold">
              Industries We Serve
            </p>
            <p className="text-white text-xl  ">
              Our PVC pipes are versatile and ideal for various applications,
              including residential water supply, sewage systems, irrigation,
              electrical conduits, and industrial uses. They efficiently deliver
              clean water, transport wastewater, and withstand harsh chemicals.
              Additionally, they play a crucial role in fire protection and
              septic systems.
            </p>
          </div>
          {/* Card components div */}
          <div className="flex space-x-5 px-10 mt-10">
            <div className=" flex-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={industrial} />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Industrial
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className=" flex-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={industrial} />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Residential
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ideal for home water supply, drainage, and plumbing and every
                need.
              </p>
            </div>

            <div className="flex-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={industrial} />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Commercial
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>

            <div className=" flex-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={industrial} />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Infrastructure
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Suitable for office buildings, malls, and large-scale
                facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
