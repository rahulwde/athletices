import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
 const [loading,setLoading]= useState(true)
     const googleProvider = new GoogleAuthProvider();

  const [user,setUser]=useState(null)
  const createUser = (email , password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
    const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
   const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
 }
useEffect(()=>{
  const unSubsCribe = onAuthStateChanged(auth,(loggedUser)=>{
    setUser(loggedUser)
    setLoading(false)
  })
  return ()=> unSubsCribe()
},[])
const logOut = ()=>{
  return signOut(auth)
 }
 const userInfo = {
  createUser,
  user,
  setUser,
  googleSignIn,
  signIn,
  logOut

 }

  return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;