import { Link } from "react-router-dom";
import halfinch from "../../assets/1-5inch.svg";
import twoinch from "../../assets/2inch.svg";
import fourinch from "../../assets/4inch.svg";
import sixinch from "../../assets/6inch.svg";
import eightinch from "../../assets/8inch.svg";
import teninch from "../../assets/10inch.svg";
import threeinch from "../../assets/3inch.svg";
import fourteeninch from "../../assets/14inch.svg";

// Exported as named export (change to default if preferred)
export const ProductsGrid = () => {
  const products = [
    { id: "1", title: "1/2 Inch PVC Pipe", img: halfinch },
    { id: "2", title: "2 Inch PVC Pipe", img: twoinch },
    { id: "3", title: "4 Inch PVC Pipe", img: fourinch },
    { id: "4", title: "8 Inch PVC Pipe", img: eightinch },
    { id: "5", title: "10 Inch PVC Pipe", img: teninch },
    { id: "6", title: "6 Inch PVC Pipe", img: sixinch },
    { id: "7", title: "5 Inch PVC Pipe", img: threeinch },
    { id: "8", title: "3 Inch PVC Pipe", img: threeinch },
    { id: "9", title: "14 Inch PVC Pipe", img: fourteeninch },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="border w-64 h-auto rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-48 object-cover object-center hover:scale-105 transition duration-300"
          />
          <div className="border-t px-4 py-3 text-center text-sm font-medium text-[#003E75]">
            {product.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
