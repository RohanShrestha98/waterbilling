import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT2AVgU4oUWtkmPb9abetwQuGROKrORT8",
  authDomain: "againphonenumber.firebaseapp.com",
  projectId: "againphonenumber",
  storageBucket: "againphonenumber.appspot.com",
  messagingSenderId: "1020354958551",
  appId: "1:1020354958551:web:73c587771daa54c928cc92",
  measurementId: "G-62R927TEQF"
};

 const app = initializeApp(firebaseConfig);
 export default app
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);