import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-[#f95f35] mb-3">Get in Touch</h2>
        <p className="text-base-content">
          Have a question or want to work with us? Send us a message!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-base-200 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn w-full bg-[#f95f35] hover:bg-orange-600 text-white font-semibold border-none"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Info Panel or Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-base-content"
        >
          <h3 className="text-2xl font-bold text-[#f95f35]">Contact Info</h3>
          <p className="text-lightText dark:text-gray-300">
            Feel free to reach out via email or social platforms.
          </p>
          <ul className="space-y-2">
            <li>📧 Email: rahulmondol6984@gmail.com</li>
            <li>📞 Phone: +880 01319729511</li>
            <li>📍 Address: Barisal, Bangladesh</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
