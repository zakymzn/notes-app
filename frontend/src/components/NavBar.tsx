import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/light_logo_transparent.svg";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="border-b border-gray-300 px-8 py-4 flex justify-between items-center sticky top-0 bg-white z-[999]">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <ul className="space-x-8 hidden lg:flex">
        <li>
          <Link to="https://documenter.getpostman.com/view/20332382/2sB2xFfnZo" target="_blank" className="font-semibold hover:text-sky-500 transition-all duration-200">
            API Docs
          </Link>
        </li>
        <li>
          <Link to={isLoggedIn ? "/notes" : "/login"} className="font-semibold hover:text-sky-500 transition-all duration-200">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/login" className="font-semibold hover:text-sky-500 transition-all duration-200">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="rounded-full border border-gray-300 px-4 py-2 font-semibold hover:text-white hover:bg-black transition-all duration-200">
            Register
          </Link>
        </li>
      </ul>
      <button onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? '' : 'space-y-2'} hover:cursor-pointer lg:hidden`}>
        <div className={`${showMenu ? 'rotate-45 translate-y-0.5' : ''} h-1 w-10 bg-black rounded-xl transition-all duration-200`}></div>
        <div className={`${showMenu ? 'hidden' : ''} h-1 w-10 bg-black rounded-xl transition-all duration-200`}></div>
        <div className={`${showMenu ? '-rotate-45 -translate-y-0.5' : ''} h-1 w-10 bg-black rounded-xl transition-all duration-200`}></div>
      </button>
      <ul className={`${showMenu ? '' : 'hidden'} flex flex-col space-y-4 bg-white border border-gray-300 rounded-xl m-4 p-4 pr-16 fixed top-20 right-0 lg:hidden`}>
        <li>
          <Link to="https://documenter.getpostman.com/view/20332382/2sB2xFfnZo" target="_blank" className="font-semibold hover:text-sky-500 transition-all duration-200">
            API Docs
          </Link>
        </li>
        <li>
          <Link to={isLoggedIn ? "/notes" : "/login"} className="font-semibold hover:text-sky-500 transition-all duration-200">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/login" className="font-semibold hover:text-sky-500 transition-all duration-200">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="font-semibold hover:text-sky-500 transition-all duration-200">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar