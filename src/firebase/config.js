// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSzFzG85dqHlUWqBO1QbOiwnWORmoHHFs",
  authDomain: "eaki-website.firebaseapp.com",
  projectId: "eaki-website",
  storageBucket: "eaki-website.appspot.com",
  messagingSenderId: "640640474042",
  appId: "1:640640474042:web:4da34a63a0ea7ef3cfdb83",
  measurementId: "G-G7NXCY33V1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
