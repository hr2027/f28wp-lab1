
const form = document.getElementById("registrationForm");

function validateUsername() {
    const username = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    if (username.value.trim() === "") {
        usernameError.innerHTML = "Username cannot be empty";
        username.classList.add("error");
    } else {
        usernameError.innerHTML = "";
        username.classList.add("success");
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === "") {
        emailError.innerHTML = "Email cannot be empty";
        email.classList.add("error");
    } else if (!emailPattern.test(email.value)) {
        emailError.innerHTML = "Invalid email format";
        email.classList.add("error");
    } else {
        emailError.innerHTML = "";
        email.classList.add("success");
    }
}

function validatePassword() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.trim() === "") {
        passwordError.innerHTML = "Password cannot be empty";
        password.classList.add("error");
    } else if (password.value.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        password.classList.add("error");
    } else {
        passwordError.innerHTML = "";
        password.classList.add("success");
    }
}

function validateConfirmPassword() {
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const password = document.getElementById("password");
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.innerHTML = "Confirm Password cannot be empty";
        confirmPassword.classList.add("error");
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        confirmPassword.classList.add("error");
    } else {
        confirmPasswordError.innerHTML = "";
        confirmPassword.classList.add("success");
    }
}

form.addEventListener("submit", function () {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
        document.querySelectorAll(".success").length === 4 &&
        document.querySelectorAll(".error").length === 0
    ) {
        alert("Registration successful!");
        form.reset();
    }
});

const inputFields = document.querySelectorAll("input");
for (const field of inputFields) {
    field.addEventListener("blur", function () {
        if (field.id === "username") {
            validateUsername();
        } else if (field.id === "email") {
            validateEmail();
        } else if (field.id === "password") {
            validatePassword();
        } else if (field.id === "confirmPassword") {
            validateConfirmPassword();
        }
    });
}
