import qua from "../../assets/quality.svg";

const Quality = () => {
  return (
    <div className="bg-white px-6 py-10 md:px-20 md:py-14 space-y-10">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left Text Content */}
        <div className="space-y-4">
          <h2 className="text-center text-blue-700 font-semibold text-sm border-t border-b border-gray-300 py-2">
            Quality Of Our Products
          </h2>

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
        <div className="flex justify-center md:justify-end">
          <img
            src={qua}
            alt="Worker in warehouse"
            className="w-full max-w-xs rounded shadow-md"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-4">
        <h4 className="text-blue-900 font-bold text-lg">
          Standard PVC Pipe Size Chart
          <span className="block text-sm font-normal text-gray-700">
            (Schedule 40)
          </span>
        </h4>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border border-gray-300">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-2 border border-gray-300">Nominal Size</th>
                <th className="p-2 border border-gray-300">
                  Outer Diameter (mm)
                </th>
                <th className="p-2 border border-gray-300">
                  Wall Thickness (mm)
                </th>
                <th className="p-2 border border-gray-300">
                  Inner Diameter (mm)
                </th>
                <th className="p-2 border border-gray-300">Weight (kg/m)</th>
                <th className="p-2 border border-gray-300">
                  Pressure Rating (Bar / PSI)
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-gray-800">
              {[
                ["½″", "21.34", "2.77", "15.60", "~0.33", "28 bar / 400 PSI"],
                ["¾″", "26.67", "2.87", "20.83", "~0.45", "23 bar / 320 PSI"],
                ["1″", "33.40", "3.38", "26.64", "~0.61", "23 bar / 320 PSI"],
                ["1¼″", "42.16", "3.63", "35.04", "~0.61", "23 bar / 300 PSI"],
                ["2″", "60.33", "3.91", "52.51", "~0.50", "21 bar / 300 PSI"],
                ["3″", "88.30", "5.49", "62.71", "~8.49", "21 bar / 300 PSI"],
                ["5″", "141.30", "6.02", "77.62", "~6.39", "21 bar / 300 PSI"],
                ["6″", "188.90", "6.02", "102.26", "~7.60", "21 bar / 230 PSI"],
                [
                  "8″",
                  "273.05",
                  "7.11",
                  "153.30",
                  "~13.10",
                  "17 bar / 230 PSI",
                ],
                [
                  "10″",
                  "143.30",
                  "6.27",
                  "144.06",
                  "~16.30",
                  "17 bar / 230 PSI",
                ],
                [
                  "12″",
                  "188.28",
                  "10.21",
                  "143.45",
                  "~33.50",
                  "8 bar / 110 PSI",
                ],
                [
                  "14″",
                  "355.60",
                  "10.31",
                  "334.98",
                  "~45.50",
                  "6 bar / 90 PSI",
                ],
                [
                  "24″",
                  "609.60",
                  "11.13",
                  "364.14",
                  "~45.60",
                  "4 bar / 60 PSI",
                ],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2 border border-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Quality;
