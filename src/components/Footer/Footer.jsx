import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  ArrowRight,
  Award,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-6 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src="/Footericon.webp" alt="Logo Icon" className="w-12 h-12" />
                  <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <img src="/Footertext.webp" alt="Logo Text" className="h-8" />
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Leading manufacturer of premium PVC pipes and fittings. Trusted by thousands of customers for quality, durability, and excellence in construction solutions.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                  <Award size={16} className="text-orange-500" />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-full">
                  <Shield size={16} className="text-green-500" />
                  <span className="text-sm">15+ Years</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Products", path: "/Products" },
                  { name: "Contact Us", path: "/ContactUs" },
                  { name: "Quality Assurance", path: "/quality" },
                  { name: "Installation Guide", path: "/guide" }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.path}
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-all duration-300 group"
                    >
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-12 h-1 bg-orange-500 rounded-full"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Call Us</p>
                    <p className="font-semibold">+928-612233</p>
                    <p className="text-gray-400 text-sm">Mon-Sat 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email Us</p>
                    <p className="font-semibold">info@paradise.com</p>
                    <p className="text-gray-400 text-sm">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Visit Us</p>
                    <p className="font-semibold">Industrial Area, Block A</p>
                    <p className="text-gray-400 text-sm">City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Truck size={16} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Free Delivery</p>
                    <p className="font-semibold">Within 50km radius</p>
                    <p className="text-gray-400 text-sm">Orders above $500</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl  font-bold relative">
                Stay Updated
                <div className="absolute bottom-0 left-0 w-12 h-1  bg-orange-500 rounded-full"></div>
              </h3>
              
              <p className="text-gray-300 text-sm">
                Subscribe to get latest updates on new products, offers, and industry insights.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-4 bg-gray-800 text-white rounded-xl border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors duration-300 pr-12"
                  />
                  <button className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-300">
                    <Send size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <input type="checkbox" className="rounded" />
                  <span>I agree to receive marketing emails</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <p className="text-sm font-medium">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
                    { icon: Twitter, color: "hover:bg-blue-400", name: "Twitter" },
                    { icon: Linkedin, color: "hover:bg-blue-700", name: "LinkedIn" },
                    { icon: MessageCircle, color: "hover:bg-green-600", name: "WhatsApp" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 group`}
                      title={social.name}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-950 px-6 md:px-20 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
              <p>© 2024 Paradise PVC. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-orange-500 transition-colors duration-300">Sitemap</a>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;