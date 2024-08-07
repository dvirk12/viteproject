// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "qtoqag2bf4twq0bw0mfqlgpbq559c5kfdu8y0hb5qkkuvw2v",
  authDomain: "myblog-4e8a3.firebaseapp.com",
  projectId: "myblog-4e8a3",
  storageBucket: "myblog-4e8a3.appspot.com",
  messagingSenderId: "859787094470",
  appId: "1:859787094470:web:28ccd5bd7b7d4bb3832ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}