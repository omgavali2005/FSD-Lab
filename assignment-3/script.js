document.getElementById("myForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let valid = true;

    // Reset errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";
    document.getElementById("confirmError").innerText = "";

    // Name check
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email regex check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    // Password length
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Minimum 6 characters";
        valid = false;
    }

    // Password match
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        document.getElementById("myForm").reset();
    }
});
