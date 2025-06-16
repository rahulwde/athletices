import React, {  use, useState } from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";

import { StyledWrapper, StyledWrappered } from '../uverse';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import register from '../assets/register- 1750053248908.json'
import Lottie from 'lottie-react';

const Register = () => {
  const {createUser,setUser,googleSignIn}= use(AuthContext)
 
  const [error, setError] = useState()

  const handleRegister = e=>{
    e.preventDefault()

     const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const lengthCheck = password.length >= 6;

    if (!uppercaseCheck) {
      return setError("Password must contain at least one uppercase letter.");
    }

    if (!lowercaseCheck) {
      return setError("Password must contain at least one lowercase letter.");
    }

    if (!lengthCheck) {
      return setError("Password must be at least 6 characters long.");
    }
     createUser(email,password)
    .then((res)=>{
      const user = res.user
      setUser(user)
    }).catch((error)=>
    console.log(error))
 
    console.log({ name, email, photo, password });
    Swal.fire("Success!", "Registration successful", "success");
    form.reset();
  }
     const handleGoogleLogin = () => {
    googleSignIn()
      .then(result => {
        Swal.fire("Success", "Google Login successful!", "success");
        
      
      })
      .catch(error => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4   bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
              >
        
      <div className="justify-center items-center bg-white md:flex gap-10 h-3/4 dark:bg-gray-900 shadow-lg rounded-2xl lg:px-20 p-4">
           <div className="space-y-2.5">
                <Lottie
                  animationData={register}
                  loop={true}
                  style={{ height: 300, width: 300 }}
                />
              
              </div>

      <div>
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          Register to Swimmer Event
        </h2>
    
        <form onSubmit={handleRegister} >
         <div className='space-y-4'>
           <div >
            <StyledWrappered className='w-full' >
          <div className="input-group  ">
            <input required type="text" name="name" autoComplete="off" className="input w-full" />
            <label className="user-label">Name</label>
          </div>
        </StyledWrappered>
            <div>
              <StyledWrappered className='w-full my-5' >
          <div className="input-group  ">
            <input required type="email" name="email" autoComplete="off" className="input w-full" />
            <label className="user-label">Email</label>
          </div>
        </StyledWrappered>
            </div>
            <StyledWrappered className='w-full' >
          <div className="input-group  ">
            <input required type="url" name="photo" autoComplete="off" className="input w-full" />
            <label className="user-label">photoUrl</label>
          </div>
        </StyledWrappered>
        
          </div>
          <div >
            <StyledWrappered className='w-full my-2' >
          <div className="input-group  ">
            <input required type="password" name="password"  autoComplete="off" className="input w-full" />
            <label className="user-label">password</label>
          </div>
        </StyledWrappered>
        
          </div>
         </div>
          <StyledWrapper>
          <button  className="button w-full">
            <div className="blob1" />
            <div className="blob2" />
            <div className="inner flex gap-3 items-center justify-center text-2xl" type="submit">
              Register <IoMdLogIn  size={25}/>
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
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Register;