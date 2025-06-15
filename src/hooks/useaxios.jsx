import axios from 'axios';
 import { AuthContext } from '../Context/AuthContext';
import { use } from 'react';

const axiosSecure = axios.create({
  baseURL:'http://localhost:5000/'
})

const useaxios = () => {
   const {user,logOut}= use(AuthContext)
   axiosSecure.interceptors.request.use(config=>{
    config.headers.authorization = ` Bearer ${user.accessToken}`
    return config
   })
   axiosSecure.interceptors.response.use(response=>{
    return response
   },error=>{
    // console.log(error)
    if(error.status===401 || error.status === 403){
          logOut().then(()=>{
            console.log("logOut")
          })
    }
    return Promise.reject(error)
   })
  return  axiosSecure
};

export default useaxios;