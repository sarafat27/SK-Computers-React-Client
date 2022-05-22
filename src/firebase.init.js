// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAglg1LRNetxmARp7AryWjAnErdAWO5Ubk",
    authDomain: "sk-computers.firebaseapp.com",
    projectId: "sk-computers",
    storageBucket: "sk-computers.appspot.com",
    messagingSenderId: "400302116063",
    appId: "1:400302116063:web:ed3b14c57495c7b68aad6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;