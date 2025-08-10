import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { use, useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { StyledDropDown } from "../uverse";
import {
  AiFillHome,
  AiOutlineCalendar,
  AiFillPlusCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";


const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "LogOut successfully",
        icon: "success",
        draggable: true,
      });
    });
  };

  const links = (
    <>
      <li className="w-36">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-[#f95f35]" : "text-gray-300 hover:text-[#f95f35]"}`
          }
        >
          <AiFillHome size={20} />
          Home
        </NavLink>
      </li>

      {user && (
        <>
          <li className="w-36">
            <NavLink
              to="/event"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
                ${isActive ? "text-[#ecfeff]" : "text-gray-300 hover:text-[#f95f35]"}`
              }
            >
              <AiOutlineCalendar size={20} />
              Event
            </NavLink>
          </li>

          <li className="w-36">
            <NavLink
              to="/createEvent"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
                ${isActive ? "text-[#ecfeff]" : "text-gray-300 hover:text-[#f95f35]"}`
              }
            >
              <AiFillPlusCircle size={20} />
              CreateEvent
            </NavLink>
          </li>
        </>
      )}

      <li className="w-36">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-[#ecfeff]" : "text-gray-300 hover:text-[#f95f35]"}`
          }
        >
          <IoMdContacts size={20} />
          Contact
        </NavLink>
      </li>

      <li className="w-36">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
            ${isActive ? "text-[#ecfeff]" : "text-gray-300 hover:text-[#f95f35]"}`
          }
        >
          <AiOutlineInfoCircle size={20} />
          About
        </NavLink>
      </li>

      {/* Login/Register only for mobile dropdown */}
      {!user && (
        <>
          <li>
            <Link to="/login" className="text-white hover:text-[#083344]">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-[#083344]">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`navbar sticky top-0 z-50 transition-all duration-300 shadow-sm px-5 
      ${scrolled
        ? "bg-[#083344] rounded-lg mt-2 shadow-lg max-w-[1200px] mx-auto py-3"
        : "bg-[#083344] rounded-none w-full py-5"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#f95f35] rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="p-3">
          <img className="w-18" src="https://i.ibb.co/5xnXSnHB/logo2.png" alt="logo" />
        </div>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end mx-8">
        {/* Desktop Login/Register */}
        {!user && (
          <div className="flex gap-3 hidden lg:flex">
            <Link to="/login">
              <button className="btn bg-[#083344] text-[#f95f35] hover:bg-[#f95f35] hover:text-[#083344] transition-colors duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn bg-[#083344] text-[#f95f35] hover:bg-[#f95f35] hover:text-[#083344] transition-colors duration-300">
                Register
              </button>
            </Link>
          </div>
        )}

        {/* User Dropdown */}
        {user && (
          <StyledDropDown>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "user"}>
              <label className="popup relative group">
                <input type="checkbox" />
                <div tabIndex={0} className="burger">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/5xnXSnHB/logo2.png"}
                    alt="User Avatar"
                    className="w-24 rounded-full ring-2 ring-primary"
                  />
                </div>
                <nav className="popup-window">
                  <legend>Hi! {user.displayName}</legend>
                  <ul>
                    <li><NavLink to="/myBooking">MyBooking</NavLink></li>
                    <li><NavLink to="/manageEvent">ManageEvent</NavLink></li>
                    <li><NavLink to="/bookEvent">BookEvent</NavLink></li>
                    <li>
                      <button className="btn btn-ghost" onClick={handleLogOut}>
                        <CiLogout /> Logout
                      </button>
                    </li>
                  </ul>
                </nav>
              </label>
            </div>
          </StyledDropDown>
        )}

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
