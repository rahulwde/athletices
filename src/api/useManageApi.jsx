import React from 'react';
import useaxios from '../hooks/useaxios';

const useManageApi = () => {
  const axiousSecure = useaxios()
  const manageEventPromise = email =>{
     return axiousSecure.get(`athletics?email=${email}`).then(res=>res.data)
  }
  return  {
    manageEventPromise
  }
};

export default useManageApi;