// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGEPxa0rGPyByiY8Tp3GaiflGnApQocgU",
  authDomain: "prevozmoldovabulgaria.firebaseapp.com",
  projectId: "prevozmoldovabulgaria",
  storageBucket: "prevozmoldovabulgaria.firebasestorage.app",
  messagingSenderId: "970743272899",
  appId: "1:970743272899:web:c27df38bd186bd7e7a1976",
  measurementId: "G-2DDCLMRE0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);