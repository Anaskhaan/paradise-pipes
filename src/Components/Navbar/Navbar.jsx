/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full bg-none z-10 max-sm:px-5 sm:px-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-3 px-0 ">
          <img src={logo} alt="PVC pipes logo" className="h-14 " />

          <div className="md:flex md:w-auto gap-5">
            <ul className="flex-row items-center hidden gap-10 font-normal md:flex lg:flex ">
              <li className="hover:scale-125 duration-200">
                <Link
                  to="hero"
                  smooth={true}
                  duration={800}
                  className="lis cursor-pointer "
                >
                  Home
                </Link>
              </li>
              <li className="hover:scale-125 duration-200">
                <Link
                  to="about"
                  smooth={true}
                  duration={800}
                  className="lis cursor-pointer "
                >
                  About
                </Link>
              </li>
              <li className="hover:scale-125 duration-200">
                <Link
                  to="applications"
                  smooth={true}
                  duration={800}
                  className="lis cursor-pointer "
                >
                  Pricing
                </Link>
              </li>
              <li className="hover:scale-125 duration-200">
                <Link
                  to="footer"
                  smooth={true}
                  duration={800}
                  className="lis cursor-pointer "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="flex items-center">
              {showInput && (
                <input
                  type="text"
                  id="simple-search"
                  className={`text-sm rounded-lg text-white outline-none p-2  bg-white bg-opacity-30 ${
                    showInput ? "text-white placeholder:text-white" : ""
                  }`}
                  placeholder="Search..."
                  required
                />
              )}
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white hover:scale-150 duration-200"
                onClick={toggleInput}
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
