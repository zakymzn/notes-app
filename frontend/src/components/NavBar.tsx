import { Link } from "react-router-dom";
import logo from "../assets/light_logo_transparent.svg";

function NavBar() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="border-b border-gray-300 px-8 py-4 flex justify-between items-center sticky top-0 bg-white">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-10" />
      </Link>
      <div className="space-x-8">
        <Link to="https://documenter.getpostman.com/view/20332382/2sB2xFfnZo" target="_blank" className="font-semibold hover:text-sky-500 transition-all duration-200">
          API Docs
        </Link>
        <Link to={isLoggedIn ? "/notes" : "/login"} className="font-semibold hover:text-sky-500 transition-all duration-200">
          Notes
        </Link>
        <Link to="/login" className="font-semibold hover:text-sky-500 transition-all duration-200">
          Login
        </Link>
        <Link to="/register" className="rounded-full border border-gray-300 px-4 py-2 font-semibold hover:text-white hover:bg-black transition-all duration-200">
          Register
        </Link>
      </div>
    </nav>
  )
}

export default NavBar