import React, { useState } from "react"
import { IoMdMenu, IoMdCloseCircle  } from "react-icons/io";




export const Navbar = () => {
    const [menu, openmenu] = useState(false);
    const [showMenu, setshowMenu] = useState(true);
    return (
        <nav className='flex justify-between md:items-center text-white px-10 pt-6
                        md:px-20'>
            <span className="text-xl font-bold tracking-wide'>Portfolio">Portfolio</span>

            <ul className={`${menu ? "block" : "hidden"} mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none
            text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>

                <a href="#Home">
                    <li className='text-md transition-all duration-300 p-1 md:p-0'>Home</li>
                </a>

                <a href="#Aboute">
                    <li className='text-md transition-all duration-300 p-1 md:p-0'>About </li>
                </a>
                <a href="#project">
                    <li className='text-md transition-all duration-300 p-1 md:p-0'>Porject</li>
                </a>
                <a href="#Footer">
                    <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
                </a>
            </ul>
            {showMenu ? (
                <IoMdMenu size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={() => { openmenu(!menu); setshowMenu(!setshowMenu); }} />

            ) : <IoMdCloseCircle  size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={() => { openmenu(!menu); setshowMenu(!setshowMenu); }} />
                
            }
        </nav>
    );
}

export default Navbar;
