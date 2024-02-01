import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0dFkxgNVis8J8I1a0yHRPBLu4FIBJl6c",
  authDomain: "to-do-ea10b.firebaseapp.com",
  projectId: "to-do-ea10b",
  storageBucket: "to-do-ea10b.appspot.com",
  messagingSenderId: "514614681509",
  appId: "1:514614681509:web:852cc3cd2c45be8f4f924c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
