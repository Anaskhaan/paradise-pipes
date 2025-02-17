import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = ({ navTabs, routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="lg:hidden block p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-16 flex flex-col space-y-6 px-6">
          {navTabs.map((tab, index) => (
            <Link key={index} to={routes[index]} className="text-black text-lg" onClick={() => setIsOpen(false)}>
              {tab}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;
