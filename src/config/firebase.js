import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// import * as firebase from "firebase/auth";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKER, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIPMvCgU0blUJS9hpx12fV_Ijh1RhU6m8",
    authDomain: "practica-firebase-20220504.firebaseapp.com",
    projectId: "practica-firebase-20220504",
    storageBucket: "practica-firebase-20220504.appspot.com",
    messagingSenderId: "447970156467",
    appId: "1:447970156467:web:aefec13745bec1ed6675c6"
};

console.log("Valor de configuración", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth();

export { database, storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };