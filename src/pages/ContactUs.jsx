import { motion } from "framer-motion";

const ContactUs = () => {
  // Function to handle map click
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
    <motion.div
      className="max-w-6xl mx-auto p-4"
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
              src="https://maps.googleapis.com/maps/api/staticmap?center=Township+Barhu&zoom=14&size=600x400&key=YOUR_API_KEY"
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
  );
};

export default ContactUs;
