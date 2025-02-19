import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const navTabs = ["Home", "About Us", "Our Products", "Contact"];
const routes = ["/", "/about", "/Products", "/ContactUs"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white fixed left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-3  transition-all duration-75 ease-in-out ${
        isScrolled ? "top-0" : "lg:top-10 xl:top-10 2xl:top-10 top-0"
      }`}
    >
      {/* Sidebar for Mobile */}
      <Sidebar navTabs={navTabs} routes={routes} />

      <div className="px-4 md:px-16 flex items-center space-x-2">
        <img src="/logo-icon.webp" alt="logo-icon" className="w-8 md:w-auto" />
        <img src="/logo-word.webp" alt="logo-word" className="hidden md:block" />
      </div>

      {/* Navigation Tabs (Hidden in mobile) */}
      <div className="hidden lg:flex space-x-6">
        {navTabs.map((tab, index) => (
          <Link key={index} to={routes[index]} className="text-black transition">
            {tab}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <button className="bg-[#ea6338] text-white py-1 px-3">Get a Quote</button>
    </nav>
  );
};

export default Navbar;