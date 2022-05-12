// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWEJbmkCiX4ElhIZXpJgSDmqJByt_hHZw",
  authDomain: "recipeplus-1ed0a.firebaseapp.com",
  projectId: "recipeplus-1ed0a",
  storageBucket: "recipeplus-1ed0a.appspot.com",
  messagingSenderId: "89157647614",
  appId: "1:89157647614:web:50efac528b0838cadff9af",
  measurementId: "G-8X97N399MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, sendEmailVerification}