import Icons from "../../assets/icons";
import Images from "../../assets/images";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="px-6 md:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Company Info - Left side */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={Icons.logo} alt="Logo Icon" className="w-10 h-10 z-50" />
                </div>
                <img src={Icons.logof} alt="Logo Text" className="h-6" />
              </div>

              <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                Delivering quality and trust since 2009. Premium PVC pipes and
                fittings manufacturer trusted by thousands.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/Products"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/ContactUs"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Social Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
                  >
                    Get a quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Follow */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Follow</h3>

              {/* Social Media Icons */}
              <div className="flex gap-6">
                <a
                  href="#"
                  title="Facebook"
                >
                  <img src={Images.fb} className="size-6" alt="facebook-icon" />
                </a>
                <a
                  href="#"
                  title="WhatsApp"
                >
                  <img src={Images.whatsapp} className="size-6" alt="whatsapp-icon" />
                </a>
                <a
                  href="#"
                  title="LinkedIn"
                >
                  <img src={Images.LinkedIn} className="size-6" alt="LinkedIn-icon" />
                </a>
                <a
                  href="#"
                  title="Twitter"
                >
                  <img src={Images.X} className="size-6" alt="twitter-icon" />

                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-blue-600 my-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-blue-200">
              <p>Need assistance: +92335-6754439</p>
            </div>

            <div className="text-sm text-blue-200">
              <p>Copyright© All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
