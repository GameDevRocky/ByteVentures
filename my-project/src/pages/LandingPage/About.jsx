import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen flex p-16">
      <div className="w-full h-full flex flex-col md:flex-row items-center">
        {/* Image Container with Animation */}
        <motion.div
          className="rounded-2xl overflow-hidden w-96 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/public/media/image.png" alt="About Us" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Container with Animation */}
        <motion.div
          className="w-full mt-8 md:mt-0 md:ml-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold mb-4">What Is BYTE?</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque leo eget nisi tincidunt, eget aliquet nunc tincidunt.
            Integer tincidunt, nunc eget aliquet tincidunt, nunc nisl aliquet
            nunc, eget aliquet nunc nisl eget nunc. Nullam scelerisque leo eget
            nisi tincidunt, eget aliquet nunc tincidunt.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;