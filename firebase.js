// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsp_BqZIw6TwGI0v7yzQiZ9lPatD5Dffs",
  authDomain: "quantumkart-6d4e6.firebaseapp.com",
  projectId: "quantumkart-6d4e6",
  storageBucket: "quantumkart-6d4e6.firebasestorage.app",
  messagingSenderId: "451553557342",
  appId: "1:451553557342:web:937b96880cf4c4eb02adcf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logoutUser = () => signOut(auth);
