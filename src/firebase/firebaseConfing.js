// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUw-RGymkfP5MWf8qtHDv5ng8zxpxMVOA",
  authDomain: "uzumplan.firebaseapp.com",
  projectId: "uzumplan",
  storageBucket: "uzumplan.appspot.com",
  messagingSenderId: "908574736883",
  appId: "1:908574736883:web:ea5d0b216dcb46c165d286",
  measurementId: "G-7YBCD3X822",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
