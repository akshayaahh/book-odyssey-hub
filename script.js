document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            alert(`Explore ${category.textContent} books soon!`);
        });
    });
});

