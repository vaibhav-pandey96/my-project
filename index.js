// index.js
import { db } from './firebase-config.js';  // Import Firestore database instance
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js';

// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent default form submission

    // Get form input values
    const studentID = document.getElementById('studentID').value;
    const teacherID = document.getElementById('teacherID').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const reason = document.getElementById('reason').value;

    try {
        // Add a new document in the 'appointments' collection
        await addDoc(collection(db, "appointments"), {
            studentID: studentID,
            teacherID: teacherID,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            reason: reason
        });
        alert('Appointment successfully booked!');
    } catch (e) {
        console.error('Error adding document: ', e);
        alert('Error booking appointment, please try again.');
    }
});
