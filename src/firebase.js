// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9suSGdID3MvPLp3M4E6wvI3W0mDWVrqY",
  authDomain: "absai-640a4.firebaseapp.com",
  projectId: "absai-640a4",
  storageBucket: "absai-640a4.firebasestorage.app",
  messagingSenderId: "880767633075",
  appId: "1:880767633075:web:686cc68ec42adfac1152c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage };