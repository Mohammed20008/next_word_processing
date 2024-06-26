// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQBSNEAY0gq4J9HM1fpruldn0b7E4dqi8",
  authDomain: "word-processing-85305.firebaseapp.com",
  projectId: "word-processing-85305",
  storageBucket: "word-processing-85305.appspot.com",
  messagingSenderId: "324042394915",
  appId: "1:324042394915:web:451289b2877a476cf21096",
  measurementId: "G-C58JKJ6300",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
