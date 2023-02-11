
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfSc6dDcut6LtTDe-sKntN_hamF5zpMVo",
  authDomain: "react-sneakers-72b8c.firebaseapp.com",
  projectId: "react-sneakers-72b8c",
  storageBucket: "react-sneakers-72b8c.appspot.com",
  messagingSenderId: "832714238009",
  appId: "1:832714238009:web:01c9303cdbb3a7f34b05e8",
  measurementId: "G-17705T20RN"
};


const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default firebase;