// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXVk1mJ5Qa8Xhltz3y5n4-BapT_sv8UM",
  authDomain: "punto-casero-c18ea.firebaseapp.com",
  projectId: "punto-casero-c18ea",
  storageBucket: "punto-casero-c18ea.firebasestorage.app",
  messagingSenderId: "1017513740905",
  appId: "1:1017513740905:web:034509d45b794c31e170f8",
  measurementId: "G-D896G7WK50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };