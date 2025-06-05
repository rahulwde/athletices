 
import { Link, NavLink } from 'react-router';
 


const Navbar = () => {
  
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
      {/* {
        user && <> 
        <li>
      <NavLink 
        to="/myApplication" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        MyApplication
      </NavLink>
      </li>
        </>
      }
      {
        user && <> 
        <li>
      <NavLink 
        to="/addData" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        AddData
      </NavLink>
      </li>
        </>
      }
      {
        user && <> 
        <li>
      <NavLink 
        to="/myPostedJob" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        MyPostedJOb
      </NavLink>
      </li>
        </> */}
      {/* } */}
    </>
  ]
  // const handleLogOut = ()=>{
  //         logOut().then(res=>console.log(res.user))
  // }
  
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
      <img className='w-18' src="https://i.ibb.co/h0MXV8t/swimlogo.webp" alt="" />
    </div>
  

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>{
    // user?<button className='btn btn-ghost ' onClick={handleLogOut}>logout</button>:<div className='flex gap-3'>  <Link to="/login"><button className='btn btn=primary'>Login</button></Link>
    //  <Link to="/register"><button className='btn btn=primary'>Register</button></Link></div>
  }
</div>
  );
};

export default Navbar;