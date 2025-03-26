document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const genre = category.textContent;
            alert(`You selected ${genre} books! Feature coming soon!`);
        });
    });
});
