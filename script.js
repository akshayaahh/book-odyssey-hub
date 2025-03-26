document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const genre = category.classList[1]; // Get genre class name
            window.location.href = `${genre}.html`; // Redirect to genre page
        });
    });
});
const bookRecommendations = {
    adventurous: "The Hobbit - J.R.R. Tolkien",
    romantic: "Pride and Prejudice - Jane Austen",
    mysterious: "Gone Girl - Gillian Flynn",
    thrilling: "The Girl with the Dragon Tattoo - Stieg Larsson",
    futuristic: "Neuromancer - William Gibson",
};

document.getElementById("recommendButton").addEventListener("click", () => {
    const mood = document.getElementById("moodInput").value.toLowerCase();
    const recommendation = bookRecommendations[mood] || "Try exploring different genres!";
    document.getElementById("recommendationResult").innerText = `📖 Recommended Book: ${recommendation}`;
});

