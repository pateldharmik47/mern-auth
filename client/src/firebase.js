// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-4437b.firebaseapp.com",
    projectId: "mern-auth-4437b",
    storageBucket: "mern-auth-4437b.firebasestorage.app",
    messagingSenderId: "458952810510",
    appId: "1:458952810510:web:db64f0b850c269a07fdc5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);