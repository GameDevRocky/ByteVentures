import { motion } from "framer-motion";
import Navbar from "../LandingPage/Navbar";
import { FaPhone, FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full min-h-screen text-blue-400 gap-8  p-8 flex flex-col">
        <h1 className="text-neutral-400 font-bold text-5xl">Get in <span className="text-blue-400">Touch</span> </h1>
        <div className="flex flex-col-reverse md:flex-row w-full">      
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 p-8  rounded-lg "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;