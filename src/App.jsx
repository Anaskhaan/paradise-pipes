import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./components/ProductDetails";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Renders Home at "/" */}
          <Route path="Products" element={<Products />} />
          <Route path="Products/:id" element={<ProductDetails />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}
