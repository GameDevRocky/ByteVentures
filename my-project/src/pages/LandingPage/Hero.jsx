import { MdOutlineEmail } from "react-icons/md";

const Hero = () => {
    return (
        <>
            {/* Background Image Section */}
            <div className="absolute w-full h-screen justify-end -z-10">
                <div className="-z-10">
                    <img
                        className="-z-10 -scale-x-100 absolute object-cover w-full h-full"
                        src="/public/media/image copy 9.png"
                        alt="Background"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full flex md:bg-transparent bg-white bg-opacity-50 text-blue-400 min-h-screen items-center justify-center">
                <div className="w-full h-full justify-start flex flex-col gap-12 md:gap-8 md:p-24 p-8 text-center md:text-left">
                    {/* Main Heading */}
                    <h1 className="font-bold drop-shadow-md text-blue-500 md:text-6xl lg:text-7xl text-5xl text-nowrap">
                        Bright Young <br /> Tech Engineers
                    </h1>

                    {/* Subheading */}
                    <div className="md:w-1/2 drop-shadow-md text-neutral-400 w-full text-sm md:text-base">
                        <h2 className="italic">
                            If a single line of code has the power to change the world,
                            what do you think a group of young coders could do?
                        </h2>
                    </div>

                    {/* Email Subscription Form */}
                    <div className="w-full md:w-[700px] gap-2 shadow-2xl bg-neutral-50 text-neutral-400 flex flex-col md:flex-row rounded-2xl md:items-center p-2">
                        {/* Email Icon and Label */}
                        <div className="flex items-center md:text-sm text-xs p-4 md:border-r-2 gap-2">
                            <MdOutlineEmail size={20} />
                            <h1>EMAIL ADDRESS</h1>
                        </div>

                        {/* Email Input Field */}
                        <div className="px-4 grow">
                            <input
                                placeholder="Enter Your Email..."
                                type="text"
                                className="border-none md:text-sm text-xs p-2 w-full focus:outline-none"
                            />
                        </div>

                        {/* Subscribe Button */}
                        <div>
                            <button className="md:w-40 w-full text-white font-bold rounded-2xl min-h-12 bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;