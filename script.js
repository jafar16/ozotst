document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const toggleForm = document.getElementById("toggleForm");
    const toggleBack = document.getElementById("toggleBack");

    // Show signup form and hide login form
    toggleForm.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
    });

    // Show login form and hide signup form
    toggleBack.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
    });
});
