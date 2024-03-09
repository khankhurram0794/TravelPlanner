// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import firestore from 'firebase/firestore'
// import firebase from 'firebase/compat/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUjAn5vhXyINR3wYGXrFg80BdE0RRwXp8",
  authDomain: "travelplanner-ed232.firebaseapp.com",
  projectId: "travelplanner-ed232",
  storageBucket: "travelplanner-ed232.appspot.com",
  messagingSenderId: "207820004847",
  appId: "1:207820004847:web:8ffecb378bfa577c91ea1a",
  measurementId: "G-3M51X8TYH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
// export const db = firebase.firestore()
export const db = getFirestore(app)