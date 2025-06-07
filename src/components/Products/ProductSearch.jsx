import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../../Helpers/Data";
import Icons from "../../assets/Icons";

const ProductSearch = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col items-stretch justify-between space-y-8">
            <div className="relative w-full max-w-md mx-auto">
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm">
                    <Icons.Search className="w-5 h-5 text-[#134697] mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full outline-none rounded-md text-sm text-gray-700"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {query && (
                    <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <li
                                    key={product.id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                                    onClick={() => navigate(`/Products/${product.id}`)}
                                >
                                    {product.title}
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-400 text-sm">No results found.</li>
                        )}
                    </ul>
                )}
            </div>

            <div>
                <Link to="/ContactUs" className="w-full">
                    <button className="bg-[#134697] text-white px-4 py-2 rounded-md w-full hover:bg-[#0f3a6b] transition-colors duration-200">
                        Book Consultation
                    </button>
                </Link>
            </div>

            {/* Related Products */}
            <div>
                <h1 className="text-[#134697] font-semibold text-xl border-b-2 border-[#134697] mb-6">
                    Related Products
                </h1>

                <div className="grid grid-cols-1 gap-6">
                    {products.slice(0, 4).map((product) => (
                        <Link key={product.id} to={`/Products/${product.id}`}>
                            <div className="p-3 flex space-x-2 items-center">
                                <img src={product.img} alt={product.title} className="w-20 h-20 object-contain mb-2" />
                                <p className="text-sm text-center text-[#003E75] font-medium">{product.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSearch;