// Initialize Firebase first
const firebaseConfig = {
    apiKey: "AIzaSyAD_TfQTThg7VWDvo-UpYkbNTsEstwJUyQ",
    authDomain: "student-teacher-appointm-1a987.firebaseapp.com",
    projectId: "student-teacher-appointm-1a987",
    storageBucket: "student-teacher-appointm-1a987.appspot.com",
    messagingSenderId: "632033851068",
    appId: "1:632033851068:web:1be7180ca4b54ce30ac2b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();


// Login function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            window.location.href = "index1.html"; // Redirect to the appointment page
        })
        .catch(error => {
            alert(error.message);
        });
}

// Register function
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            window.location.href = "appointment-form.html"; // Redirect to the appointment page
        })
        .catch(error => {
            alert(error.message);
        });
}
