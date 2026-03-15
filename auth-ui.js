// auth-ui.js
// Simple UI switching - NO FIREBASE IMPORTS HERE!

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const footerLink = document.getElementById('authFooterLink');
    const footerText = document.getElementById('authFooterText');

    // Function to show login form
    function showLogin() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        footerText.textContent = "Don't have an account?";
        footerLink.textContent = "Sign Up";
    }

    // Function to show register form
    function showRegister() {
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        footerText.textContent = "Already have an account?";
        footerLink.textContent = "Login";
    }

    // Event Listeners
    loginTab.addEventListener('click', showLogin);
    registerTab.addEventListener('click', showRegister);
    
    footerLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (footerText.textContent.includes("Don't have")) {
            showRegister();
        } else {
            showLogin();
        }
    });

    // Toggle password visibility (pure UI, no Firebase)
    window.togglePassword = function(inputId) {
        const input = document.getElementById(inputId);
        const icon = input.nextElementSibling;
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    };

    // Check URL hash on load
    if (window.location.hash === '#register') {
        showRegister();
    } else {
        showLogin();
    }
});