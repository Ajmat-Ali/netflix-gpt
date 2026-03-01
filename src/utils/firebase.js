// ---------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9yUT6IJQ_6LIlLWw60aQ_jgWROFZtTU",
  authDomain: "netflix-gpt-3707d.firebaseapp.com",
  projectId: "netflix-gpt-3707d",
  storageBucket: "netflix-gpt-3707d.firebasestorage.app",
  messagingSenderId: "697914351096",
  appId: "1:697914351096:web:98221292493ad2b05c8a0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
