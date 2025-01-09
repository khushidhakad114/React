// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATTiZ5sto-2ExqhrnXOPjY0s2pxmgJu6U",
  authDomain: "restaurant123-c6d20.firebaseapp.com",
  projectId: "restaurant123-c6d20",
  storageBucket: "restaurant123-c6d20.firebasestorage.app",
  messagingSenderId: "188902294762",
  appId: "1:188902294762:web:7646e02026804b70f34393",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
