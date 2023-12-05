import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfmVBbnYXbnt3HmjXi1q7cpH__d2td7B0",
  authDomain: "chat-96bba.firebaseapp.com",
  projectId: "chat-96bba",
  storageBucket: "chat-96bba.appspot.com",
  messagingSenderId: "35144220135",
  appId: "1:35144220135:web:f43aeae6b235fad0059142",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
