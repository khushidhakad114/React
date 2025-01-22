// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACBlXM68ueLNClZqIrCYq4neAj3eWjlpY",
    authDomain: "taste-e-indore.firebaseapp.com",
    projectId: "taste-e-indore",
    storageBucket: "taste-e-indore.firebasestorage.app",
    messagingSenderId: "1003972203504",
    appId: "1:1003972203504:web:2459db73519871e8df0335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();