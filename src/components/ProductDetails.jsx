

import { Link, useParams } from "react-router-dom";
import { productsData } from "../Helpers/Data";
import { HdpePipeTable } from "../components/HomeComponents/HdpePipeTable";
import Testimonials from "../components/HomeComponents/Testimonials";

export default function ProductDetail() {
  const { id } = useParams();
  console.log(id)
  const product = productsData.find((p) => p.id === id);

  if (!product) return <div className="p-6">Product not found</div>;

  const TableComponent =
    product.tableComponent === "HdpePipeTable" ? HdpePipeTable : null;
  const TestimonialsComponent =
    product.testimonialsComponent === "Testimonials" ? Testimonials : null;

  return (
    <div className="  ">
      <div className="bg-[#e7edf5]  p-4">
        <Link to="/Products" >
          <button className="px-4 py-2 mt-12 lg:mt-8   text-white bg-[#134597] rounded-md">Back to Products Page</button>
        </Link>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-center py-12 sm:py-16 md:py-20 lg:py-12 items-start gap-6 sm:gap-8 md:gap-10">
          <div className="w-full lg:w-auto">
            <h1 className="text-base sm:text-lg text-[#134697] mb-1 font-semibold">{product.title}</h1>
            <img
              src={product.image}
              alt={product.title}
              className="rounded w-full h-auto max-w-full sm:max-w-[600px] md:max-w-[700px] lg:h-[700px] lg:w-[800px] object-cover"
            />
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 w-full lg:w-auto">
            <div className="space-y-2 px-4 sm:px-6 w-full lg:w-[500px] min-h-[200px] lg:h-64 rounded-sm py-4 bg-white text-left">
              <h2 className="text-lg sm:text-xl text-[#134697] font-semibold mb-2">Specifications</h2>
              <ul className="text-gray-700 space-y-2 sm:space-y-3">
                {product.specs && product.specs.map((spec, idx) => (
                  <li key={idx} className="text-sm sm:text-base">
                    <strong>{spec.label}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 ml-0 sm:ml-4">
              <h1 className="font-semibold text-[#134697] text-sm sm:text-base">Terms and Condition</h1>
              <ul className="mt-2">
                <li className="text-[#646866] text-sm sm:text-base">Shipping Policy</li>
                <li className="text-[#646866] text-sm sm:text-base">Refund and Return Policy</li>
                <li className="text-[#646866] text-sm sm:text-base">Terms of use</li>
                <li className="text-[#646866] text-sm sm:text-base">Privacy Policy</li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 ml-0 sm:ml-4">
              <h1 className="font-semibold text-[#134697] text-sm sm:text-base">Categories</h1>
              <ul className="mt-2">
                <li className="text-[#646866] text-sm sm:text-base">Electricals</li>
                <li className="text-[#646866] text-sm sm:text-base">Light</li>
                <li className="text-[#646866] text-sm sm:text-base">Hardware</li>
                <li className="text-[#646866] text-sm sm:text-base">Plumbing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 px-0 sm:px-8 md:px-16 lg:px-12 pb-6 sm:pb-8 md:pb-10 text-sm sm:text-base">{product.description()}</p>

        {/* Use Case */}
        <div className="flex relative pb-24 flex-col lg:flex-row space-x-0 lg:space-x-12 items-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10 px-4 sm:px-8 lg:px-0">
          <img
            src={product.useCaseImage}
            alt="Use Case"
            className="rounded shadow w-full max-w-[400px] h-[300px] sm:max-w-[500px] sm:h-[350px] md:h-[400px] md:w-[500px] lg:h-[500px] lg:w-[600px] object-cover"
          />

          {/* Decorative lines - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute border-r-4 w-2 h-32 border-[#134697] bottom-16 -left-20" />
          <div className="hidden lg:block absolute border-b-4 w-[530px] h-2 border-[#134697] bottom-16 -left-[75px]" />

          <div className="space-y-4 sm:space-y-6 px-4 sm:px-0 text-sm sm:text-base  text-left">
            <p>{product.useCaseText()}</p>
          </div>
        </div>

      </div>

      {/* Applications */}
      <div className="my-16 sm:my-24 md:my-32 lg:my-24  px-4 lg:ml-32 ml-0 sm:px-0">
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#134697]">Application and Uses of {product.title2}</h2>
        <div className="text-gray-700">
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            {product.applications()}
          </ul>
        </div>
      </div>

      {TableComponent && <TableComponent />}

      {TestimonialsComponent && <TestimonialsComponent />}
    </div>
  );
}
