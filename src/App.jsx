import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap everything inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Renders Home at "/" */}
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}
