// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-W6ISxJplyEtC6aBO3ku4ZsyTIc3TAQ0",
  authDomain: "fridge-tracker-e0dc7.firebaseapp.com",
  projectId: "fridge-tracker-e0dc7",
  storageBucket: "fridge-tracker-e0dc7.appspot.com",
  messagingSenderId: "1042083238157",
  appId: "1:1042083238157:web:0b27ab2aa8b879e3376044",
  measurementId: "G-2JJM9H7P7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);