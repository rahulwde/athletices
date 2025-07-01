import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const MainLayout = () => {
  const [loading , setLoading]= useState(true)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return()=> clearTimeout(timer)
  },[])
  if(loading){
    return <Loader></Loader>
  }
  return (
    <div className='bg-background'>
      <Navbar></Navbar>
     <div className='min-h-screen'>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;