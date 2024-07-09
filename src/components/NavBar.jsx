import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from '../assets/GadgetStore.png'

const NavBar = () => {

    const [mobileNavMenuClicked, setmobileNavMenuClicked] = useState(false);

    return ( 
        <div 
            className={mobileNavMenuClicked? "navbar flex items-start justify-between responsive-nav-parent" : "navbar flex items-start justify-between"
        }>
            <div>
                <img src={logo} alt="" />
            </div>

            <div 
                className="hamburger-icon"
                onClick={() => setmobileNavMenuClicked(!mobileNavMenuClicked)}
            >
                &#9776;
            </div>

            <div className={mobileNavMenuClicked? "navlist md:flex responsive-nav": "navlist md:flex"}>
                <ul className="flex gap-5 lg:gap-12 md:gap-4">
                    <NavLink 
                        to={'/'}
                        onClick={() => setmobileNavMenuClicked(false)}
                    >
                        <span className="p-3">
                            Home
                        </span>
                    </NavLink>
                    <li className="cursor-pointer">Categories</li>
                    <NavLink 
                        to={'cart'}
                        onClick={() => setmobileNavMenuClicked(false)}
                    >
                        <span className="p-3">
                            Cart
                        </span>
                    </NavLink>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>

            <div className="bg-black text-white rounded-2xl w-fit items-center p-2 h-8 hidden md:hidden lg:flex">
                <CiSearch className="flex justify-center ml-3"/>
                <input 
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Search"
                    className="bg-black text-white border-none h-3" 
                />
            </div>
        </div>
     );
}
 
export default NavBar;