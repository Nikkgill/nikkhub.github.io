// Add any interactive features here
console.log("Welcome to NikkHome! ❤️");

// Example animation for login box on load
window.addEventListener('load', () => {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.opacity = '0';
    loginBox.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        loginBox.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        loginBox.style.opacity = '1';
        loginBox.style.transform = 'translateY(0)';
    }, 300);
});