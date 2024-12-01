document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleForm = document.getElementById("toggleForm");
    const toggleBack = document.getElementById("toggleBack");
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    // Switch to Signup Form
    toggleForm.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
    });

    // Switch to Login Form
    toggleBack.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
    });

    // Toggle Password Visibility
    togglePasswordIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
            const targetInput = document.getElementById(icon.dataset.target);
            const iconElement = icon.querySelector("i");

            if (targetInput.type === "password") {
                targetInput.type = "text";
                iconElement.classList.remove("fa-eye");
                iconElement.classList.add("fa-eye-slash");
            } else {
                targetInput.type = "password";
                iconElement.classList.remove("fa-eye-slash");
                iconElement.classList.add("fa-eye");
            }
        });
    });
});
