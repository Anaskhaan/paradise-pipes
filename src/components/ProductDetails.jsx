// import { useParams } from "react-router-dom";
// import { products } from "../Helpers/Data";

// const testimonials = [
//   {
//     id: 1,
//     name: "Engr. Ahmad Khan",
//     position: "Chief Engineer Alpha Constructions",
//     feedback:
//       "We have been using Quality Pro pipes for our construction projects, and the quality is outstanding. The pipes are durable, leak-proof, and easy to install. Highly recommended.",
//   },
//   {
//     id: 2,
//     name: "Engr. Bilal Ahmed",
//     position: "Lead Engineer Beta Infrastructure",
//     feedback:
//       "Exceptional quality & durability! These pipes exceeded our expectations in terms of performance and longevity.",
//   },
//   {
//     id: 3,
//     name: "Engr. Sarah Malik",
//     position: "Project Manager Skyline Builders",
//     feedback:
//       "These pipes offer excellent strength and reliability, making them perfect for high-pressure applications.",
//   },
// ];

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return (
//       <div className="text-center mt-10 text-red-500">Product not found</div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6">
//       {/* Product Details Section */}
//       <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
//         <div>
//           <h2 className="text-lg font-semibold mb-4">{product.name}</h2>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-[500px] h-[300px] object-cover rounded-lg"
//           />
//         </div>

//         <div className="ml-6">
//           <div className="bg-white shadow-md p-4 rounded-lg">
//             <h3 className="font-medium text-gray-700 mb-2">Specification</h3>
//             <p>
//               <strong>Material:</strong> {product.material}
//             </p>
//             <p>
//               <strong>Pressure Rating:</strong> {product.pressureRating}
//             </p>
//             <p>
//               <strong>Temperature Range:</strong> {product.temperatureRange}
//             </p>
//             <p>
//               <strong>Standard Length:</strong> {product.length}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="mt-16">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           What our client says about us?
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white p-6 shadow-md rounded-lg text-center"
//             >
//               <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//               <p className="text-sm text-gray-500">{testimonial.position}</p>
//               <p className="mt-4 text-gray-700 italic">
//                 {testimonial.feedback}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import { useParams } from "react-router-dom";
import productsData from "../Helpers/Data";
import { HdpePipeTable } from "../components/HomeComponents/HdpePipeTable";
import Testimonials from "../components/HomeComponents/Testimonials";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) return <div className="p-6">Product not found</div>;

  const TableComponent =
    product.tableComponent === "HdpePipeTable" ? HdpePipeTable : null;
  const TestimonialsComponent =
    product.testimonialsComponent === "Testimonials" ? Testimonials : null;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="rounded shadow"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <ul className="text-gray-700">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong className="capitalize">{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700">{product.description}</p>

      {/* Use Case */}
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <img
          src={product.useCaseImage}
          alt="Use Case"
          className="rounded shadow"
        />
        <p className="text-gray-700">{product.useCaseText}</p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Applications</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.applications.map((app, idx) => (
            <li key={idx}>{app}</li>
          ))}
        </ul>
      </div>

      {/* Table Component */}
      {TableComponent && <TableComponent />}

      {/* Testimonials */}
      {TestimonialsComponent && <TestimonialsComponent />}
    </div>
  );
}
