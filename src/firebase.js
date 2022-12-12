// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaLa5EVKapeeXr4sTI6wHTIeDFjOvhyZU",
  authDomain: "fir-auth-practice3.firebaseapp.com",
  projectId: "fir-auth-practice3",
  storageBucket: "fir-auth-practice3.appspot.com",
  messagingSenderId: "394822603858",
  appId: "1:394822603858:web:4fc2c4a8f5e2d8efa93b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);