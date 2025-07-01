import { Link, NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { use } from "react";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { StyledDropDown } from "../uverse";

// Import icons from react-icons
import {
  AiFillHome,
  AiOutlineCalendar,
  AiFillPlusCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const links = [
    <>
      <li className="w-36">
        {" "}
        {/* width approx 9rem */}
        <NavLink
          to="/"
         className={({ isActive }) => 
  `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
   ${isActive ? 'text-[#f95f35]' : 'text-gray-300 hover:text-[#f95f35]'}`
}

        >
          <AiFillHome size={20} />
          Home
        </NavLink>
      </li>

      <li className="w-36">
        <NavLink
          to="/event"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
             ${
               isActive
                 ? "text-[#ecfeff]"
                 : "text-gray-300 hover:text-[#f95f35]"
             }`
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
             ${
               isActive
                 ? "text-[#ecfeff]"
                 : "text-gray-300 hover:text-[#f95f35]"
             }`
          }
        >
          <AiFillPlusCircle size={20} />
          CreateEvent
        </NavLink>
      </li>

      <li className="w-36">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors duration-200
             ${
               isActive
                 ? "text-[#ecfeff]"
                 : "text-gray-300 hover:text-[#f95f35]"
             }`
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
             ${
               isActive
                 ? "text-[#ecfeff]"
                 : "text-gray-300 hover:text-[#f95f35]"
             }`
          }
        >
          <AiOutlineInfoCircle size={20} />
          About
        </NavLink>
      </li>
    </>,
  ];

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "LogOut successfully",
        icon: "success",
        draggable: true,
      });
    });
  };

  return (
    <div className="navbar sticky top-0 bg-[#083344] text-[#ecfeff]  px-5 z-50 shadow-sm rounded-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#f95f35] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="p-3">
          <img
            className="w-18"
            src="https://i.ibb.co/5xnXSnHB/logo2.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mx-8">
        <div className="mx-5 z-20">
          {user ? (
            <StyledDropDown>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "user"}
              >
                <label className="popup relative group">
                  <input type="checkbox" />
                  <div tabIndex={0} className="burger">
                    <img
                      src={
                        user?.photoURL || "https://i.ibb.co/5xnXSnHB/logo2.png"
                      }
                      alt="User Avatar"
                      className="w-24 rounded-full ring-2 ring-primary"
                    />
                  </div>

                  <nav className="popup-window">
                    <legend>Hi! {user.displayName}</legend>
                    <ul>
                      <li>
                        <button>
                          <NavLink
                            to="/myBooking"
                            className={({ isActive }) =>
                              isActive ? "active-link" : ""
                            }
                          >
                            MyBooking
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button>
                          <NavLink
                            to="/manageEvent"
                            className={({ isActive }) =>
                              isActive ? "active-link" : ""
                            }
                          >
                            ManageEvent
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button>
                          <NavLink
                            to="/bookEvent"
                            className={({ isActive }) =>
                              isActive ? "active-link" : ""
                            }
                          >
                            BookEvent
                          </NavLink>
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn btn-ghost"
                          onClick={handleLogOut}
                        >
                          <CiLogout />

                          Logout
                        </button>
                      </li>
                    </ul>
                  </nav>
                </label>
              </div>
            </StyledDropDown>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
          )}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
