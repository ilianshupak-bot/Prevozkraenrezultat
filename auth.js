// auth.js

// 1. Взимаме "ключа" от другия файл (firebase-config.js)
import { auth } from './firebase-config.js';

// 2. Взимаме функциите от Google (за вход, изход и т.н.)
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile,
    onAuthStateChanged,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- ЛОГИКА ЗА РЕГИСТРАЦИЯ ---
const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const msg = document.getElementById('auth-message');

        try {
            // Създаваме потребител в Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Добавяме името му
            await updateProfile(user, { displayName: name });

            msg.textContent = 'Успешна регистрация! Пренасочване...';
            msg.className = 'message success';
            
            setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        } catch (error) {
            console.error(error);
            let errorText = "Грешка при регистрация.";
            if(error.code === 'auth/email-already-in-use') errorText = "Този имейл вече е регистриран.";
            if(error.code === 'auth/weak-password') errorText = "Паролата трябва да е поне 6 символа.";
            
            msg.textContent = errorText;
            msg.className = 'message error';
        }
    });
}

// --- ЛОГИКА ЗА ВХОД (LOGIN) ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const msg = document.getElementById('auth-message');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            msg.textContent = 'Успешен вход!';
            msg.className = 'message success';
            window.location.href = 'index.html';
        } catch (error) {
            console.error(error);
            msg.textContent = "Грешен имейл или парола.";
            msg.className = 'message error';
        }
    });
}

// --- ПРОВЕРКА ДАЛИ ПОТРЕБИТЕЛЯТ Е ВЛЕЗНАЛ (Работи на всички страници) ---
onAuthStateChanged(auth, (user) => {
    const navUl = document.querySelector('nav ul');
    
    // Махаме стария бутон, за да не се дублира
    const oldAuthBtn = document.getElementById('auth-btn-li');
    if(oldAuthBtn) oldAuthBtn.remove();

    const li = document.createElement('li');
    li.id = 'auth-btn-li';

    if (user) {
        // АКО Е ВЛЕЗНАЛ: Покажи името и бутон Изход
        const userName = user.displayName || user.email;
        li.innerHTML = `<a href="#" style="color: #3b82f6;">👤 ${userName} (Изход)</a>`;
        li.addEventListener('click', () => {
            signOut(auth).then(() => {
                window.location.reload(); 
            });
        });
    } else {
        // АКО НЕ Е ВЛЕЗНАЛ: Покажи бутон Вход
        li.innerHTML = `<a href="login.html" style="color: #f59e0b;">🔑 Вход</a>`;
    }

    if(navUl) navUl.appendChild(li);
});

// Тази функция е само за смяна между "Вход" и "Регистрация" в login.html
window.showForm = function(type) {
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');
    const btns = document.querySelectorAll('.toggle-btn');
    const msg = document.getElementById('auth-message');
    
    if(msg) msg.textContent = '';

    if(type === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        btns[0].classList.remove('active');
        btns[1].classList.add('active');
    }
}