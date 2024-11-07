// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAD_TfQTThg7VWDvo-UpYkbNTsEstwJUyQ",
    authDomain: "student-teacher-appointm-1a987.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-1a987-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "student-teacher-appointm-1a987",
    storageBucket: "student-teacher-appointm-1a987.appspot.com",
    messagingSenderId: "632033851068",
    appId: "1:632033851068:web:1be7180ca4b54ce30ac2b9",
    measurementId: "G-VVPJQLZJM2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore database instance
export { auth,  db };
