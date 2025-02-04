import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs6jeDaoRyKn5xWRBVfzMr1wdskSE-HFM",
  authDomain: "portofolio-62d18.firebaseapp.com",
  projectId: "portofolio-62d18",
  storageBucket: "portofolio-62d18.firebasestorage.app",
  messagingSenderId: "163461699037",
  appId: "1:163461699037:web:15789bd2b5ed9a88e35234",
  measurementId: "G-SSE3LH59XH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };