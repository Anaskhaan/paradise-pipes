import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

const navTabs = ["Home", "About Us", "Our Products", "Contact"];
const routes = ["/", "/about", "/Products", "/ContactUs"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
            : "lg:top-10 xl:top-10 2xl:top-10 top-0 bg-white shadow-md"
        }`}
      >
        <div className="px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo-icon.webp" 
                  alt="logo-icon" 
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <img
                src="/logo-word.webp"
                alt="logo-word"
                className="hidden md:block h-8 transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navTabs.map((tab, index) => (
                <a
                  key={index}
                  href={routes[index]}
                  className="relative text-gray-700 font-medium hover:text-orange-500 transition-all duration-300 group py-2"
                >
                  {tab}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Get Quote Button */}
              <a 
                href="/ContactUs" 
                className="hidden lg:block relative overflow-hidden group"
              >
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img src="/logo-icon.webp" alt="logo" className="w-8 h-8" />
                <img src="/logo-word.webp" alt="logo-word" className="h-6" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navTabs.map((tab, index) => (
                  <a
                    key={index}
                    href={routes[index]}
                    className="block text-gray-700 font-medium text-lg hover:text-orange-500 transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {tab}
                  </a>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="/ContactUs"
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Get a Quote
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;