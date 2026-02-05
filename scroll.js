/* --- scroll.js --- */

let lastScrollTop = 0; // Пазим последната позиция на скрола
const header = document.querySelector('header');
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function() {
    // Взимаме текущата позиция
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Проверка за "bounce" ефект при iOS (да не се скрива при превъртане най-горе)
    if (scrollTop < 0) { 
        scrollTop = 0; 
    }

    // Ако скролваме НАДОЛУ и сме минали поне 100px от началото
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('header-hidden'); // Скриваме хедъра
    } 
    // Ако скролваме НАГОРЕ
    else {
        header.classList.remove('header-hidden'); // Показваме хедъра
    }

    // Управление на бутона "Scroll to Top"
    if (scrollToTopBtn) {
        if (scrollTop > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    lastScrollTop = scrollTop; // Запазваме новата позиция
});

// Функционалност на бутона "Scroll to Top"
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}