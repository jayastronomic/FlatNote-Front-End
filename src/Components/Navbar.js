import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/F.png'



const Navbar = (props) => {
    return(
            <header className="lg:px-8 px-6 bg-blue-200 flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <NavLink to="/home"><img className="h-32" src={logo} alt="Logo" ></img></NavLink>
                    <label htmlFor="menu-toggle" className="point-cursor lg:hidden block">
                        <i className="fill-current cursor-pointer text-gray-900 fas fa-bars"></i>
                    </label>
                    </div>
 
                    
                    <input type="checkbox" className="hidden" id="menu-toggle"/>
                    <div className="hidden lg:flex lg:items-container lg:w-auto w-full" id="menu">
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ><NavLink to="/new/note">New Note</NavLink></li>
                                <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ><NavLink to="/notes">All Notes</NavLink></li>
                                <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ><NavLink to="/login">Login</NavLink></li>
                                <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" ><NavLink to="/signup">Sign up</NavLink></li>
                            </ul>
                        </nav>
                    </div>
            </header>
    )
}

export default Navbar;
