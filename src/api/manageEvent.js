export const manageEventPromise = (email,accessToken)=>{
  return fetch(`http://localhost:5000/athletics?email=${email}`,{
    headers:{
      authorization : `Bearer ${accessToken}`
    }
  }).then(res=>res.json())
}