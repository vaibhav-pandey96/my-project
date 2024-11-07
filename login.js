// login.js
import { auth } from './firebase-config.js';  // Import Firebase Auth instance
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';

// Handle form submission for login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent default form submission

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Sign in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful!');
            console.log('User:', userCredential.user);
            // Redirect to the main page after login
            window.location.href = 'index1.html'; // Replace with the actual URL of your form page

        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in: ' + error.message);
        }
    });
} 
// Handle form submission for registration
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();  // Prevent default form submission

            const regEmail = document.getElementById('regEmail').value;
            const regPassword = document.getElementById('regPassword').value;

            try {
                // Create the user
                const userCredential = await createUserWithEmailAndPassword(auth, regEmail, regPassword);
                alert('Registration successful! You can now log in.');
                console.log('User registered:', userCredential.user);
                // Redirect to login page after successful registration
                window.location.href = 'login.html';  // Redirect to login page after registration
            } catch (error) {
                console.error('Error registering:', error);
                alert('Error registering: ' + error.message);
            }
        });
    } 
});