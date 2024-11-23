// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQ_fd2DaUjau5ZPWWi9JXt784ddQgdBE",
  authDomain: "carsale-a13bb.firebaseapp.com",
  projectId: "carsale-a13bb",
  storageBucket: "carsale-a13bb.firebasestorage.app",
  messagingSenderId: "643123532744",
  appId: "1:643123532744:web:d0502ba5c2157d7735a6fd"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };