import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Contact from "../ContactPage/Contact";
const LandingPage = () =>{

    return(
        <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#dbe9ff_1px,transparent_1px),linear-gradient(to_bottom,#dbe9ff_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Navbar/>
        <Hero/>
        <About/>
        <Contact/>
        </div>
    )

}

export default LandingPage;