// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGni3KRZi6HallLjtKuhZLB8P1tlCY1GE",
  authDomain: "ar-parts-manufacturer.firebaseapp.com",
  projectId: "ar-parts-manufacturer",
  storageBucket: "ar-parts-manufacturer.appspot.com",
  messagingSenderId: "484826484168",
  appId: "1:484826484168:web:a1917bae2c71172d9544fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;