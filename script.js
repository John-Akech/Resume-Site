// Toggle navbar menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    navbarToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all validation passes, you can submit the form
    form.submit();
}

// Function to validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
