import { Link } from "react-router-dom";
import { products } from "../../Helpers/Data";


// Exported as named export (change to default if preferred)
const ProductsGrid = () => {


  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          to={`/Products/${product.id}`}
          key={product.id}
          className="border w-64 h-auto rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-48 object-cover object-center hover:scale-105 transition duration-300"
          />
          <div className="rounded-tl-xl rounded-tr-xl border border-[#134697] shadow-[0_6px_0_0_#134697] px-4 py-3 text-center text-sm font-medium text-[#003E75]">
            {product.title}
          </div>

        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
