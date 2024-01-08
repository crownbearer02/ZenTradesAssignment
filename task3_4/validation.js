function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
        alert("Please enter a valid email address for the username.");
        return false;
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one number, and only '@' as a special character.");
        return false;
    }

    if (password === "SmartServTest@123") {
        window.location.href = "dashboard.html";
        return false;
    } else {
        alert("Invalid password. Please try again.");
        return false;
    }
}

function openResetPasswordEmail() {
    window.location.href = "mailto:support@smartserv.io?subject=Password%20Reset%20Request&body=Hello,%20I%20need%20assistance%20with%20resetting%20my%20password.";
    return false;
}
