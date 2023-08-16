// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9XUXyms6UDol2J09mi3wK6hm8cXXcw4g",
  authDomain: "luizinho-barber.firebaseapp.com",
  projectId: "luizinho-barber",
  storageBucket: "luizinho-barber.appspot.com",
  messagingSenderId: "314454012579",
  appId: "1:314454012579:web:482e92f4f3801a6c54c516",
  measurementId: "G-DNK392PD62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);