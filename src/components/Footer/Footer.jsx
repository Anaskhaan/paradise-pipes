import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252E3D] text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Footericon.webp" alt="Logo Icon" className="w-10 h-10" />
            <img src="/Footertext.webp" alt="Logo Text" className="h-6" />
          </div>

          {/* Quick Links - Left */}
          <div className="space-y-2 mt-6 md:mt-0">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="Products" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="ContactUs" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Right */}
          <div className="space-y-2 mt-6 md:mt-0">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="mt-6  md:mt-0">
            <h3 className="font-semibold">Newsletter</h3>
            <div className="flex mt-2 ">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-md bg-gray-200 text-black focus:outline-none"
              />
              <button className="bg-[#EA6338] text-white px-3 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-500 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Need assistance: +928-612233</p>
          <p>Copyright© All rights reserved.</p>

          {/* Circular Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/fb.webp" alt="facebook-logo" className=" size-6" />
            <img src="/wa.webp" alt="whatsapp-logo" className=" size-6" />
            <img src="/in.webp" alt="linkedin-logo" className=" size-6" />
            <img src="/X.webp" alt="twitter" className=" size-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
