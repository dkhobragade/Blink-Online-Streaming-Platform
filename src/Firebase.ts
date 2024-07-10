import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "blink-e0b7f.firebaseapp.com",
    projectId: "blink-e0b7f",
    storageBucket: "blink-e0b7f.appspot.com",
    messagingSenderId: "169126323118",
    appId: "1:169126323118:web:a3944dc5193aa5f17bde3f",
    measurementId: "G-N1HSVBCHFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { app, analytics, auth };
