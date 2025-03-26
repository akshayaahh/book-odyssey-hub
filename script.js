document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const genre = category.classList[1]; // Get genre class name
            window.location.href = `${genre}.html`; // Redirect to genre page
        });
    });
});
