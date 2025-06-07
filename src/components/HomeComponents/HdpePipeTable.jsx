export const HdpePipeTable = () => {
  return (
    <div>
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
