export const manageEventPromise = email=>{
  return fetch(`http://localhost:5000/athletics?email=${email}`).then(res=>res.json())
}