export const myBookingPromise = email =>{
  return fetch(`http://localhost:5000/bookings?email=${email}`).then(res=>res.json())
} 