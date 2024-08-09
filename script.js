function validateForm() {
    const fullname = document.getElementById('fullname').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    const alertMessage = document.getElementById('alertMessage');

    // Reset alert message
    alertMessage.style.display = 'none';
    alertMessage.className = 'alert';

    if (fullname === "" || address === "" || password === "" || !gender || dob === "" || contact === "" || email === "") {
        alertMessage.textContent = "All fields are required!";
        alertMessage.style.display = 'block';
        alertMessage.classList.add('error');
        return false;
    }

    if (password.length < 6) {
        alertMessage.textContent = "Password must be at least 6 characters long.";
        alertMessage.style.display = 'block';
        alertMessage.classList.add('error');
        return false;
    }

    if (!validateEmail(email)) {
        alertMessage.textContent = "Please enter a valid email address.";
        alertMessage.style.display = 'block';
        alertMessage.classList.add('error');
        return false;
    }

    alertMessage.textContent = "Form submitted successfully!";
    alertMessage.style.display = 'block';
    alertMessage.classList.add('success');
    return false; // Prevent actual form submission for demonstration
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
