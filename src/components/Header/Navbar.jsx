import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logof from "../../assets/logo-f.svg";

const navTabs = ["Home", "About Us", "Products", "Contact"];
const routes = ["/", "/about", "/Products", "/ContactUs"];

const productDropdownItems = [
  { id: 1, name: "1/2 Inch PVC Pipe" },
  { id: 2, name: "2 Inch PVC Pipe" },
  { id: 3, name: "4 Inch PVC Pipe" },
  { id: 4, name: "6 Inch PVC Pipe" },
  { id: 5, name: "8 Inch PVC Pipe" },
  { id: 6, name: "10 Inch PVC Pipe" },
  { id: 7, name: "12 Inch PVC Pipe" },
  { id: 8, name: "14 Inch PVC Pipe" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "lg:top-10 xl:top-10 top-0 bg-white shadow-md"
        }`}
      >
        <div className="px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="logo-icon"
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
              />
              <img
                src={logof}
                alt="logo-word"
                className="hidden md:block h-8 transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navTabs.map((tab, index) =>
                tab === "Products" ? (
                  <div key={index} className="relative group">
                    <div className="flex items-center gap-1 text-gray-700 hover:text-[#134697] cursor-pointer py-2 transition-all duration-300">
                      {tab}
                      <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#134697]" />
                    </div>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-100 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {productDropdownItems.map((item) => (
                        <Link
                          to={`/Products/${item.id}`}
                          key={item.id}
                          className="block px-4 py-2 text-sm text-[#134697] border-b last:border-none border-gray-200 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={routes[index]}
                    className="relative text-gray-700 hover:text-[#134697] transition-all duration-300 group py-2"
                  >
                    {tab}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#134697] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link
                to="/WholeSeller"
                className="hidden lg:block bg-[#134697] text-white px-6 py-2 rounded-full font-light hover:bg-[#103b80] transition"
              >
                Become a Wholesaler
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="logo" className="w-8 h-8" />
                <img src={logof} alt="logo-word" className="h-6" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 px-6 py-8 space-y-6">
              {navTabs.map((tab, index) => (
                <Link
                  key={index}
                  to={routes[index]}
                  className="block text-gray-700 font-medium text-lg hover:text-[#134697] transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {tab}
                </Link>
              ))}
              <Link
                to="/WholeSeller"
                className="block w-full bg-[#134697] py-4 text-white rounded-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Wholesaler
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
