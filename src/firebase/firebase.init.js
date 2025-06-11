// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lh_0i3Gr4TWEyow_4wmOvUogBdjQyNk",
  authDomain: "athletice-auth.firebaseapp.com",
  projectId: "athletice-auth",
  storageBucket: "athletice-auth.firebasestorage.app",
  messagingSenderId: "820576591958",
  appId: "1:820576591958:web:9cbb6add43b2c68665dbf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
