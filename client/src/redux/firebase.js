// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDUn5OylBhZDVzUAb5ModJJejEZU1pIEzE",
  authDomain: "mern-blog-62da4.firebaseapp.com",
  projectId: "mern-blog-62da4",
  storageBucket: "mern-blog-62da4.appspot.com",
  messagingSenderId: "546746465503",
  appId: "1:546746465503:web:adc0afa0c34ce3ca377d6a",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export {app};