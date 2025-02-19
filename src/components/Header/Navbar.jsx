import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const navTabs = ["Home", "About Us", "Our Products", "Contact"];
const routes = ["/", "/about", "/products", "/contact"];

  const [scroll , setScroll] = useState("")
  

const Navbar = () => {
  return (
    <nav className="bg-white fixed lg:top-10 xl:top-10 2xl:top-10 top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-3 shadow-md">
      {/* Sidebar for Mobile */}
      <Sidebar navTabs={navTabs} routes={routes} />

      {/* Logo (Leave empty for now) */}
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
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-2.5 text-black" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-black rounded-full focus:outline-none text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
  