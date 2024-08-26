import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmng5gtx-qISl1RA-dE5Ru44WR1KzRQHA",
  authDomain: "document-editor-f9c51.firebaseapp.com",
  projectId: "document-editor-f9c51",
  storageBucket: "document-editor-f9c51.appspot.com",
  messagingSenderId: "930939758214",
  appId: "1:930939758214:web:7952055bca325c13ae9307",
  measurementId: "G-GP0B3XZ14G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();