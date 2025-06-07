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
