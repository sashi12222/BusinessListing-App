// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-mrfDC2EAKvvEYBXEvWEoxFXvkpIDzbY",
  authDomain: "bussiness-listing-722cf.firebaseapp.com",
  projectId: "bussiness-listing-722cf",
  storageBucket: "bussiness-listing-722cf.appspot.com",
  messagingSenderId: "522410274136",
  appId: "1:522410274136:web:9bda4bed779d12c4f8892d",
  measurementId: "G-E9EG2H3SY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
// const analytics = getAnalytics(app);
