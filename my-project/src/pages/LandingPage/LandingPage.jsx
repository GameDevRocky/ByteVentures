import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Contact from "../ContactPage/Contact";
import Courses from "./Courses";

const LandingPage = () =>{

    return(
        <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Courses/>
        <Contact/>
        </div>
    )

}

export default LandingPage;