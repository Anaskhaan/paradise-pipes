import Testimonials from "../components/HomeComponents/Testimonials";
import { Applications } from "../components/Products/Applications";
import { Banner } from "../components/Products/Banner";
import Pipesch from "../components/Products/Pipesch";
import { ProductsGrid } from "../components/Products/ProductsGrid";

const Products = () => {
  return (
    <div className="p-6 space-y-10">
      {/* First section products grid and relatives */}
      <div className=" bg-white flex">
        <div className="w-[75%]">
          <ProductsGrid />
        </div>
        {/* Right column */}
        <div></div>
      </div>
      {/* Second section */}
      <div className="mx-auto">
        <Pipesch />
      </div>
      {/* Third section */}
      <div>
        <Banner />
      </div>
      <div>
        <Applications />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Products;
