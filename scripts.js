// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.getElementById('register-btn');
    const registrationForm = document.getElementById('registration-form');

    registerBtn.addEventListener('click', function () {
        registrationForm.style.display = 'block';
    });

    // Optional: Add click event to close the form when clicking outside
    document.addEventListener('click', function (event) {
        if (!registrationForm.contains(event.target) && !registerBtn.contains(event.target)) {
            registrationForm.style.display = 'none';
        }
    });
});
