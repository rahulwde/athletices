export const myBookingPromise = (email,accessToken) =>{
  return fetch(`http://localhost:5000/bookings?email=${email}`,{
    headers:{
      authorization:`Bearer ${accessToken}`
    }
  }).then(res=>res.json())
} 