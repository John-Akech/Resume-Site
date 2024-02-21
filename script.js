// Toggle navbar menu
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    navbarToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Form Validation and Submission
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        // Simulate form submission (replace with actual submission logic)
        console.log('Form submitted successfully!');
        displaySuccessMessage();
        clearForm();
    } else {
        displayErrorMessage();
    }
});

function validateForm(name, email, message) {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        return false;
    }

    if (!isValidEmail(email)) {
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displaySuccessMessage() {
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    successMessage.classList.add('success-message');
    form.appendChild(successMessage);
}

function displayErrorMessage() {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please fill in all fields correctly.';
    errorMessage.classList.add('error-message');
    form.appendChild(errorMessage);
}

function clearForm() {
    form.reset();
    setTimeout(() => {
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.remove();
        }
        const errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }, 3000);
}
