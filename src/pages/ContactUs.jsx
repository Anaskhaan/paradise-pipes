import { motion } from "framer-motion";
import message from "../assets/message.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import eng from "../assets/engahmad.svg";
import eng2 from "../assets/deptt.svg";
import eng3 from "../assets/engsana.svg";

const ContactUs = () => {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps?q=Township+Barhu", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[300px] overflow-hidden bg-[url('/contactbg.jpg')] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0  h-[30vh] "></div>

        {/* Text Overlay */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto h-full px-4 py-12 flex flex-col justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in <span className="text-orange-500">Touch</span> with Us
          </h1>
          <p className="text-gray-200 max-w-xl mb-16">
            We&apos;d love to speak you with all your 24/7 pipe needs. Our
            expert team is ready to provide solutions tailored to your
            requirements.
          </p>
        </motion.div>

        {/* Optional overlay gradient */}
        <div className="absolute inset-0 bg-gradient"></div>
      </motion.div>

      <div className="bg-[#f9fbfd] px-6 py-12 md:px-20 lg:px-32">
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-[#1d3d75]">
              Whether you have questions
            </h2>
            <p className="text-gray-600">
              about our PVC products, need technical support, or want a custom
              quote—we’re ready to assist you. Reach out through the form below,
              call us directly, or visit our office. We’re here to help!
            </p>

            <div className="space-y-5 text-[#1d3d75]">
              <div className="flex items-center space-x-4">
                <img
                  src={message}
                  alt="message box icon"
                  className="w-8 h-auto"
                />
                <span>Info@paradisepipes.pk</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={phone} alt="phone icon" className="w-8 h-auto" />
                <span>0928-621188</span>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={location}
                  alt="location icon"
                  className="w-8 h-auto"
                />
                <span>Small Industrial Estate, Township Bannu.</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 bg-white shadow-md rounded-md p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-2 rounded-md w-full h-24 resize-none"
            ></textarea>
            <button className="bg-[#1d3d75] text-white px-6 py-2 rounded-md hover:bg-[#14315a]">
              Send Now
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-[#1d3d75] mb-6">
            What our Clients say About Us
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-sm p-4 rounded-md">
              <img src={eng} alt="image" className="w-10 rounded-full" />
              <p className="text-[#1d3d75] font-semibold">Engr. Ahmad Khan</p>
              <p className="text-sm text-gray-600 mb-2">
                Chief Engineer Alpha Construction
              </p>
              <p className="text-gray-700 text-sm">
                We’ve been using Paradise Pipes for over a decade. Not only is
                the product top-tier, but their customer service is exceptional
                too.
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-sm p-4 rounded-md">
              <img src={eng2} alt="image" className="w-10 rounded-full" />
              <p className="text-[#1d3d75] font-semibold">Procurement Dept</p>
              <p className="text-sm text-gray-600 mb-2">
                Punjab Municipal Works
              </p>
              <p className="text-gray-700 text-sm">
                Their wide range of reliable products and fast delivery makes
                them our preferred vendor for infrastructure projects.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-sm p-4 rounded-md">
              <img src={eng3} alt="image" className="w-10 rounded-full" />
              <p className="text-[#1d3d75] font-semibold">
                Eng. Sanaullah Malik
              </p>
              <p className="text-sm text-gray-600 mb-2">
                KPK Engineering Corp.
              </p>
              <p className="text-gray-700 text-sm">
                Paradise Pipes helped us design one of the most efficient piping
                systems across KPK municipalities. We highly recommend them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
