 
import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { StyledDropDown } from '../uverse';
 


const Navbar = () => {
  const { user , logOut} = use(AuthContext)
  // console.log(user)
   const navLinkStyle = ({ isActive }) =>
    isActive
      ? "relative text-blue-600 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 transition-all"
      : "text-gray-700 hover:text-blue-500 transition";
  const links = [
    <>
    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Home
      </NavLink>
      </li>
      {
        user && <> 
        <li>
      <NavLink 
        to="/event" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
         Event
      </NavLink>
      </li>
        </>
      }
     
      {
        user && <> 
        <li>
      <NavLink 
        to="/createEvent" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        CreateEvent
      </NavLink>
      </li>
        </>}
         <li>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        About
      </NavLink>
      </li>
     
      {/* } */}
    </>
  ]
  const handleLogOut=()=>{
    logOut().then(()=>{
     
Swal.fire({
  title: "LogOut successfully",
  icon: "success",
  draggable: true
});
    })
 }
  
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='p-3'>
      <img className='w-18' src="https://i.ibb.co/5xnXSnHB/logo2.png" alt="" />
    </div>
  

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end mx-8">



<div className='mx-5 z-20'>
  {
    user?<StyledDropDown>
  <label className="popup relative group">
    <input type="checkbox" />
    <div tabIndex={0} className="burger">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img
            src={user?.photoURL || "https://i.ibb.co/5xnXSnHB/logo2.png"}
            alt="User Avatar"
          />
        </div>
      </div>

      {/* Hover Display Name */}
     
    </div>

   <nav className="popup-window">
          <legend>Quick Start</legend>
          <ul>
            <li>
              <button>
                 {
        user && <> 
        <li>
      <NavLink 
        to="/myBooking" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        MyBooking
      </NavLink>
      </li>
        </>
      }
                
              </button>
            </li>
            <li>
              <button>
                
                 {
        user && <> 
        <li>
      <NavLink 
        to="/manageEvent" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        ManageEvent
      </NavLink>
      </li>
        </>}
              </button>
            </li>
            <li>
              <button>
                
                   {
        user && <> 
        <li>
      <NavLink 
        to="/bookEvent" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        BookEvent
      </NavLink>
      </li>
        </>}
              </button>
            </li>
            <li>
             <button className='btn btn-ghost ' onClick={handleLogOut}>logout</button>
            </li>
          </ul>
        </nav>
  </label>
</StyledDropDown>:<div className='flex gap-3'>  <Link to="/login"><button className='btn btn=primary'>Login</button></Link>
     <Link to="/register"><button className='btn btn=primary'>Register</button></Link></div>
  }
</div>


   <ThemeToggle></ThemeToggle>
  </div>
</div>
  );
};

export default Navbar;