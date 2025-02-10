import { motion } from "framer-motion";

const About = () => {
  return (
    <>
    <div className="absolute w-full h-screen justify-end -z-10">
                <div className="-z-10">
                    <img
                        className="-z-10 -scale-x-100 absolute object-cover w-full h-full"
                        src="/public/media/image copy 2.png"
                        alt="Background"
                    />
                </div>
      </div>
      <div className="flex justify-end">
        <motion.div
        className="md:w-1/2 w-full flex flex-col h-screen rounded-l-3xl bg-blue-500 bg-opacity-90 text-white p-6 gap-12"
        >
          <div className="w-full text-6xl justify-center p-4 flex font-thin">
            <h1 className="italic">
              What is <span className="font-black">BYTE?</span>
            </h1>
          </div>
          <div className="w-full h-full font-thin text-lg">
            <p>BYTE Ventures is a youth-focused tech initiative dedicated to empowering the next generation of innovators through hands-on learning. We provide engaging workshops in game development, 3D design, robotics, and AI, helping kids explore technology in a fun and interactive way. Our mission is to bridge the gap between creativity and coding, fostering problem-solving skills and curiosity in young minds. Whether designing their first video game or building AI-powered projects, BYTE Ventures equips students with the tools to turn their ideas into reality.</p>

          </div>

        </motion.div>
      </div>
    
      </>
  );
};

export default About;