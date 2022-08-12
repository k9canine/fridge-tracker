// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID,
  APP_ID,
  DATABASE_URL,
} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  databaseURL: DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
  console.log("hello");
}

writeUserData(2, "jenna", "katherine", "asdgljglks");
