// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAldoHKwLXLJLtReg9ODbVZVi2Oj8pZpZY",
  authDomain: "e-commerce-shopping-26.firebaseapp.com",
  projectId: "e-commerce-shopping-26",
  storageBucket: "e-commerce-shopping-26.firebasestorage.app",
  messagingSenderId: "604243873241",
  appId: "1:604243873241:web:0577914fe78ee7426c9dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let firedb=getFirestore(app);
let auth=getAuth(app);
export{firedb,auth}
