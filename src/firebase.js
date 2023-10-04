// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPKGpfLZXpPfTiVx6Ra30GxGe6fZTP-RU",
    authDomain: "react-local-15974.firebaseapp.com",
    projectId: "react-local-15974",
    storageBucket: "react-local-15974.appspot.com",
    messagingSenderId: "1013823166109",
    appId: "1:1013823166109:web:5136b81c94510649f16674"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firestore = getFirestore(app); 

export { app, db, auth, firestore };
