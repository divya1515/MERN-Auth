// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-67773.firebaseapp.com",
  projectId: "mern-auth-67773",
  storageBucket: "mern-auth-67773.appspot.com",
  messagingSenderId: "739802610804",
  appId: "1:739802610804:web:2bb76e1430a74ac8a6a521"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);