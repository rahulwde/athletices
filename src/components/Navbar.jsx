 
import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
 


const Navbar = () => {
  const { user , logOut} = use(AuthContext)
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
        to="/myBooking" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        MyBooking
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
      {
        user && <> 
        <li>
      <NavLink 
        to="/manageEvent" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        manage
      </NavLink>
      </li>
        </>}
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
  <div className="navbar-end">
   <ThemeToggle></ThemeToggle>
  </div>{
    user?<button className='btn btn-ghost ' onClick={handleLogOut}>logout</button>:<div className='flex gap-3'>  <Link to="/login"><button className='btn btn=primary'>Login</button></Link>
     <Link to="/register"><button className='btn btn=primary'>Register</button></Link></div>
  }
</div>
  );
};

export default Navbar;