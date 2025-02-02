import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Navbar = () =>{

    return(
        <div className="w-full shadow-md z-50 fixed bg-white top-0 text-blue-400 flex items-center justify-between p-2 px-8">
            <div className="flex items-center gap-2 hover:cursor-pointer font-black text-3xl">  
                <img className="w-8 drop-shadow-lg -rotate-12" src="/media/image copy 7.png" />
                <h1>BYTE</h1>
            </div>
            <div>
                <ul className="flex gap-8 justify-between font-bold">
                    <li><a className="hover:text-blue-200 transition-all duration-300" href="home">Home</a></li>
                    <li><a className="hover:text-blue-200 transition-all duration-300" href="mission">Our Mission</a></li>
                    <li><a className="hover:text-blue-200 transition-all duration-300" href="courses">Courses</a></li>
                    <li><a className="hover:text-blue-200 transition-all duration-300" href="contact">Contact Us</a></li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    )

}

export default Navbar;