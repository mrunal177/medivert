import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzw1cCL8w46hV6C1k2RN1mdHmxwD3auVc",
    authDomain: "medivert.firebaseapp.com",
    projectId: "medivert",
    storageBucket: "medivert.firebasestorage.app",
    messagingSenderId: "646241114967",
    appId: "1:646241114967:web:df0356652aeca22dbc3c12",
    measurementId: "G-56JS6E1VGG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
