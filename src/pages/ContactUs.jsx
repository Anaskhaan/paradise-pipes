import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[300px] overflow-hidden bg-[url('/contactbg.jpg')] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0  h-[30vh] ">
        
        </div>

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
            We&apos;d love to speak you with all your 24/7 pipe needs. Our expert team is ready to provide solutions tailored to your requirements.
          </p>
        </motion.div>

        {/* Optional overlay gradient */}
         <div className="absolute inset-0 bg-gradient"></div> 
      </motion.div>

      {/* Contact Form and Map Section */}
      <motion.div
        className="max-w-6xl mx-auto p-4 mt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-xl font-semibold">Contact Information</h2>

            <div className="space-y-4">
              <h3 className="font-medium">Head Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>Industrial Estate, Township Barhu</p>
                <p>Khyber Pakhtunkhwa</p>
                <p>+928-612233</p>
                <p>info@parsteestore.pk</p>
              </div>
            </div>

            {/* Clickable Map Image */}
            <motion.div
              className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
              onClick={handleMapClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/api/placeholder/600/400"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send us
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>  );
};

export default ContactUs;