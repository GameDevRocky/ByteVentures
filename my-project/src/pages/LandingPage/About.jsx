import { easeIn, motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-16 bg-blue-500 text-neutral-300">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col gap-6 p-12"
      >
        <div className="border-b-2 border-white w-fit pb-3">
          <h1 className="tracking-widest text-white text-sm uppercase font-thin">About Us</h1>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Empowering the Next Generation of Innovators
        </h1>
        <p className="md:text-lg leading-relaxed text-blue-100 tracking-widest">
          BYTE Ventures is a youth-focused tech initiative dedicated to hands-on learning in game development, 3D design, robotics, and AI. Our mission is to bridge creativity and coding, fostering problem-solving skills and curiosity in young minds.
        </p>
        <p className="md:text-lg leading-relaxed text-blue-100 tracking-widest">
          Whether designing their first video game or building AI-powered projects, BYTE Ventures equips students with the tools to turn their ideas into reality.
        </p>
        <div>
          <motion.a 
          initial={{y:0}}
          whileHover={{y:-5}}
          transition={{duration: 0.1, ease: 'linear'}}
          href="/home" 
          className="inline-block border text-sm hover:text-blue-400 hover:border-blue-400  bg-white text-neutral-400 font-semibold px-6 py-3 shadow-md transition-all duration-300">
            Subscribe Now
          </motion.a>
        </div>
      </motion.div>


      <motion.div 
        className="w-full min-h-full items-center justify-center md:w-1/2 flex flex-col  bg-white"
      >
        <motion.div 
        initial ={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, ease: 'easeIn'}}
        className="relative w-full min-w-80 h-1/3 min-h-40 max-h-60 bg-white  overflow-hidden shadow-md">
          <img 
            src="/media/image copy 5.png" 
            alt="BYTE Ventures Courses" 
            className="w-full h-full object-cover"
          />
          <div className="hover:cursor-pointer absolute inset-0 flex justify-center items-center hover:bg-opacity-50 transition-all bg-white hover:bg-blue-400 bg-opacity-50">
            <h1 className="text-white font-bold text-lg hover:opacity-100 opacity-0 w-full h-full flex text-center items-center justify-center">Our Courses</h1>
          </div>
        </motion.div>

        <motion.div 
        initial ={{ opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, ease: 'easeIn'}}
        className="relative w-full min-w-80 h-1/3 min-h-40 max-h-60 bg-white overflow-hidden shadow-md">
          <img 
            src="/media/image copy 2.png" 
            alt="BYTE Ventures Courses" 
            className="w-full h-full object-cover"
          />
          <div className="hover:cursor-pointer absolute inset-0 flex justify-center items-center hover:bg-opacity-50 transition-all bg-white hover:bg-blue-400 bg-opacity-50">
            <h1 className="text-white font-bold text-lg hover:opacity-100 opacity-0 w-full h-full flex text-center items-center justify-center">Our Team</h1>
          </div>
        </motion.div>

        <motion.div 
        initial ={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.5, ease: 'easeIn'}}
        className="relative  w-full min-w-80 h-1/3 min-h-40 max-h-60 bg-white overflow-hidden shadow-md">
          <img 
            src="/media/image copy 8.png" 
            alt="BYTE Ventures Courses" 
            className="w-full h-full object-cover"
          />

          <div className="absolute hover:cursor-pointer inset-0 flex justify-center items-center hover:bg-opacity-50 transition-all bg-white hover:bg-blue-400 bg-opacity-50">
            <h1 className="text-white font-bold text-lg hover:opacity-100 opacity-0 w-full h-full flex text-center items-center justify-center">Contact Us</h1>
          </div>
          
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default About;
