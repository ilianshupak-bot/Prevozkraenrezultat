// ------------------------------------------------------------------
// 1. ИМПОРТИ (Не пипай този блок, той зарежда Firebase от интернет)
// ------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ------------------------------------------------------------------
// 2. ТВОИТЕ НАСТРОЙКИ (Тук сложи кода, който копира)
// ------------------------------------------------------------------
const firebaseConfig = {
 apiKey: "AIzaSyBcmGCml0fRyf9Ixcbqbp_PY7uCjbTtEdQ",
    authDomain: "prevoznahoramoldovabulgaria.firebaseapp.com",
    projectId: "prevoznahoramoldovabulgaria",
    storageBucket: "prevoznahoramoldovabulgaria.firebasestorage.app",
    messagingSenderId: "927446352482",
    appId: "1:927446352482:web:ccde059f432cf06a24473b",
    measurementId: "G-1SXLNYGGGF"
};

// ------------------------------------------------------------------
// 3. ИНИЦИАЛИЗАЦИЯ (Не пипай този блок)
// ------------------------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Експортваме auth, за да може auth.js да го ползва
export { auth };