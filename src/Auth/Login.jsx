import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";

import { StyledWrapper, StyledWrappered } from '../uverse';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import login from "../assets/login.json"
import Lottie from 'lottie-react';
 

const Login = () => {
   const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {signIn,googleSignIn}= use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
     const form = e.target;
     const formData = new FormData(form)
     const email = formData.get("email")
     const password = formData.get("password")
     console.log(password,email)
     signIn(email,password).then((res) => {
      
     navigate(from, { replace: true })
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });

  };

  const handleGoogleLogin = () => {
     googleSignIn()
         .then(result => {
           Swal.fire("Success", "Google Login successful!", "success");
           navigate(from, { replace: true })
         
         })
         .catch(error => {
           Swal.fire("Error", error.message, "error");
         });
  };
  return (
      <div className="min-h-screen flex items-center justify-center px-4  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
             >
                <title>Athletics - logIn</title>
    
  <div className="justify-center items-center bg-white md:flex gap-10 h-3/4 dark:bg-gray-900 shadow-lg rounded-2xl lg:px-20 p-4">
    <div className="space-y-2.5">
      <Lottie
        animationData={login}
        loop={true}
        style={{ height: 300, width: 300 }}
      />
    
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
      Login to Swimmer Event
    </h2>

    <form className="space-y-4" onSubmit={handleLogin}>
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
        <div className="inner flex gap-3 items-center justify-center text-2xl" type="submit">login <IoMdLogIn  size={25}/>
</div>
      </button>
    </StyledWrapper>
    </form>

    <div className="text-center my-4 text-sm text-gray-600 dark:text-gray-400">or</div>

   <StyledWrapper>
      <button className="button w-full">
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner flex  justify-center items-center gap-3" onClick={handleGoogleLogin}>Continue with <FcGoogle  size={25}/>
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
</div>
  );
  
};
 

export default Login;