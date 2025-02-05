import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCs6jeDaoRyKn5xWRBVfzMr1wdskSE-HFM",
    authDomain: "portofolio-62d18.firebaseapp.com",
    projectId: "portofolio-62d18",
    storageBucket: "portofolio-62d18.firebasestorage.app",
    messagingSenderId: "163461699037",
    appId: "1:163461699037:web:15789bd2b5ed9a88e35234"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };