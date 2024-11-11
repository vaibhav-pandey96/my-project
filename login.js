// login.js
import { auth } from './firebase-config.js';  // Importing Firebase Auth instance
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Signing in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            console.log('User:', userCredential.user);
            // Redirecting to the main page after login
            window.location.href = 'index1.html';

        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in: ' + error.message);
        }
    });
} 
// Handling form submission for registration
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();  // Prevent default form submission

            const regEmail = document.getElementById('regEmail').value;
            const regPassword = document.getElementById('regPassword').value;

            try {
                // Creating the user
                const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
                alert('Registration successful! You can now log in.');
                console.log('User registered:', userCredential.user);
                // Redirecting to login page after successful registration
                window.location.href = 'login.html';  // Redirect to login page after registration
            } catch (error) {
                console.error('Error registering:', error);
                alert('Error registering: ' + error.message);
            }
        });
    } 
});
