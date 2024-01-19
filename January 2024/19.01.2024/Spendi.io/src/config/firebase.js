import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB35kv8R5WgZGowVslf_inIp_R4f_imo9U",
    authDomain: "otzaot-react.firebaseapp.com",
    projectId: "otzaot-react",
    storageBucket: "otzaot-react.appspot.com",
    messagingSenderId: "712069169208",
    appId: "1:712069169208:web:d2627d82d9740c5429a6cd",
    measurementId: "G-PYVYVP4RR3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);