let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

function validateForm() {
    // Get the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.innerHTML = "";

    // Validate the name field
    if (name === "") {
        errorMessage.innerHTML = "Please enter your name.";
        return false;
    }

    // Validate the email field
    if (email === "") {
        errorMessage.innerHTML = "Please enter your email.";
        return false;
    } else {
        // Simple email pattern check
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage.innerHTML = "Please enter a valid email address.";
            return false;
        }
    }

    // Validate the phone number field
    if (phone === "") {
        errorMessage.innerHTML = "Please enter your phone number.";
        return false;
    } else {
        // Simple phone number pattern check (for numeric and 10-15 digits)
        var phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            errorMessage.innerHTML = "Please enter a valid phone number (10 digits).";
            return false;
        }
    }

    // Validate the message field
    if (message === "") {
        errorMessage.innerHTML = "Please enter your message.";
        return false;
    }

    // If all validations pass, return true to allow form submission
    return true;
}