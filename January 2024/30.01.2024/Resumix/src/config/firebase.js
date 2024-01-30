import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDiw6-HG7OZ7kLM69Vhh-sVWnA4k4MZK50",
    authDomain: "resumix-74363.firebaseapp.com",
    projectId: "resumix-74363",
    storageBucket: "resumix-74363.appspot.com",
    messagingSenderId: "608820949332",
    appId: "1:608820949332:web:9e209941587fd74b4718c1",
    measurementId: "G-WTGT5D27RK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);