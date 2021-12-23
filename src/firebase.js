import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn8i3veYM09KfaO4s-8zhWnkVBb4F2NxU",
  authDomain: "magesstudio-6c98a.firebaseapp.com",
  projectId: "magesstudio-6c98a",
  storageBucket: "magesstudio-6c98a.appspot.com",
  messagingSenderId: "845527559412",
  appId: "1:845527559412:web:e2ac04117284c1ec22c2a1",
  measurementId: "G-9GJTM4XG65",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
