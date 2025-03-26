// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.id = "darkModeToggle";
    darkModeToggle.innerText = "🌙 Dark Mode";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });
});

