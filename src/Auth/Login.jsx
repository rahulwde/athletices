import React from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { StyledWrapper, StyledWrappered } from '../uverse';

 

const Login = () => {
  return (
      <div className="min-h-screen flex items-center justify-center px-4   bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.ibb.co/JRdnTMrz/swim2.jpg')`,
            }}>
    
  <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8">
    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
      Login to Swimmer Event
    </h2>

    <form className="space-y-4">
     <div className='space-y-5'>
       <div >
        <StyledWrappered className='w-full' >
      <div className="input-group  ">
        <input required type="email" name="email" autoComplete="off" className="input w-full" />
        <label className="user-label">Email</label>
      </div>
    </StyledWrappered>
    
      </div>
      <div >
        <StyledWrappered className='w-full' >
      <div className="input-group  ">
        <input required type="password" name="email"  autoComplete="off" className="input w-full" />
        <label className="user-label">password</label>
      </div>
    </StyledWrappered>
    
      </div>
     </div>
      <StyledWrapper>
      <button className="button w-full">
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">login</div>
      </button>
    </StyledWrapper>
    </form>

    <div className="text-center my-4 text-sm text-gray-600 dark:text-gray-400">or</div>

   <StyledWrapper>
      <button className="button w-full">
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner flex  justify-center items-center gap-3">Continue with <FcGoogle  size={25}/>
</div>
      </button>
    </StyledWrapper>

    <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
      Don’t have an account?{" "}
      <Link to="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
        Signup
      </Link>
    </p>
  </div>
</div>
  );
  
};
 

export default Login;