import { easeIn, motion } from "framer-motion";


const Courses = () =>{


    return(
        <div className="w-full min-h-screen flex flex-col">

            <div className="w-full p-12 justify-center flex">
                <h1 className="text-3xl md:text-4xl font-thin text-neutral-400">What We Offer</h1>
            </div>

            <div className="w-full h-full flex flex-col md:flex-row">
                <motion.div className="md:w-1/4 w-full min-w-48 flex bg-blue-200 h-screen  overflow-hidden">
                <img src="/public\media\image copy 11.png" className="object-cover w-full h-full" ></img>

                </motion.div>
                <motion.div className="md:w-1/4 w-full min-w-48 flex bg-blue-200 h-screen  overflow-hidden">
                <img src="/public\media\image copy 12.png" className="object-cover w-full h-full" ></img>

                </motion.div>
                <motion.div className="md:w-1/4 w-full min-w-48 flex bg-blue-200 h-screen  overflow-hidden">
                <img src="/public\media\image copy 13.png" className="object-cover w-full h-full" ></img>

                </motion.div>
                <motion.div className="md:w-1/4 w-full min-w-48 flex bg-blue-200 h-screen  overflow-hidden">
                <img src="/public\media\image copy 14.png" className="object-cover w-full h-full" ></img>

                </motion.div>

                

            </div>


        </div>
    )



}

export default Courses