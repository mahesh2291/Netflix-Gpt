// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export  const firebaseConfig = {
    apiKey: "AIzaSyB-mN7NwAhYBH8T5vqMaX3N3rtGwKgpe4U",
    authDomain: "netflix-gpt-47345.firebaseapp.com",
    projectId: "netflix-gpt-47345",
    storageBucket: "netflix-gpt-47345.firebasestorage.app",
    messagingSenderId: "54754728377",
    appId: "1:54754728377:web:5933ff200b312f3ad3fe68",
    measurementId: "G-3KB2BXT6FN"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();