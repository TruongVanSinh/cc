function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return false;
    }

    // Validate Password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password. It must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.');
        return false;
    }

    // If both email and password are valid, the form will be submitted
    alert('Form submitted successfully!');
    return true;
}
