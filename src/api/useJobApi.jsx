import React from 'react';
import useaxios from '../hooks/useaxios';

const useJobApi = () => {
  const axiosSecure = useaxios()
  const myBookingPromise = email =>{
    return axiosSecure.get(`bookings?email=${email}`).then(res=>res.data)
  }
  return {
    myBookingPromise
  }
};

export default useJobApi;