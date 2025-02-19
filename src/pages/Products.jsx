import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { products } from "../Helpers/Data";
import { Link } from "react-router-dom";

const Products = () => {
  const filters = {
    diameter: "All",
    thickness: "All",
    length: "All",
  };

  const sortBy = "Most Popular";

  const resetFilters = () => {
    filters.diameter = "All";
    filters.thickness = "All";
    filters.length = "All";
  };

  return (
    <>
      <div className="w-full flex justify-center mt-[100px]">
        <div className="relative w-[60%] bg-white">
          <Search className="absolute left-3 top-2.5 text-gray-200" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none text-black"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-4 p-6">
        <div className="text-2xl font-semibold mb-6">PVC Pipes</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-lg font-medium mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Diameter
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  defaultValue={filters.diameter}
                >
                  <option value="All">All</option>
                  <option value="200mm">200mm</option>
                  <option value="250mm">250mm</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Thickness
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  defaultValue={filters.thickness}
                >
                  <option value="All">All</option>
                  <option value="8.2mm">8.2mm</option>
                  <option value="8.7mm">8.7mm</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Length</label>
                <select
                  className="w-full p-2 border rounded-md"
                  defaultValue={filters.length}
                >
                  <option value="All">All</option>
                  <option value="6m">6m</option>
                </select>
              </div>

              <button
                onClick={resetFilters}
                className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="flex justify-end mb-4">
              <select className="p-2 border rounded-md" defaultValue={sortBy}>
                <option value="Most Popular">Most Popular</option>
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Diameter: {product.diameter}</p>
                      <p>Thickness: {product.thickness}</p>
                      <p>Length: {product.length}</p>
                    </div>
                    <Link to={`/Products/${product.id}`}>
                      <button className="w-full mt-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                        View more Details
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
