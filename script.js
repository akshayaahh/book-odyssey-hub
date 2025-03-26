document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 10000);
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

const authorDetails = {
    adventurous: {
        name: "J.R.R. Tolkien",
        lifespan: "1892 - 1973",
        birthplace: "South Africa",
        notableWorks: ["The Hobbit", "The Lord of the Rings"],
        awards: ["International Fantasy Award", "Hugo Award"],
    },
    romantic: {
        name: "Jane Austen",
        lifespan: "1775 - 1817",
        birthplace: "England",
        notableWorks: ["Pride and Prejudice", "Sense and Sensibility"],
        awards: ["Regency Romance Pioneer"],
    },
    mysterious: {
        name: "Gillian Flynn",
        lifespan: "Born 1971",
        birthplace: "USA",
        notableWorks: ["Gone Girl", "Sharp Objects"],
        awards: ["Edgar Award"],
    },
    thrilling: {
        name: "Stieg Larsson",
        lifespan: "1954 - 2004",
        birthplace: "Sweden",
        notableWorks: ["The Girl with the Dragon Tattoo"],
        awards: ["Glass Key Award"],
    },
    futuristic: {
        name: "William Gibson",
        lifespan: "Born 1948",
        birthplace: "USA",
        notableWorks: ["Neuromancer", "Count Zero"],
        awards: ["Hugo Award", "Nebula Award"],
    }
};

document.querySelectorAll(".genre").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const genre = e.target.dataset.genre;
        const author = authorDetails[genre];

        const detailsSection = document.getElementById("genre-details");
        detailsSection.innerHTML = `
            <h2>${author.name}</h2>
            <p><strong>Born:</strong> ${author.birthplace}</p>
            <p><strong>Lifespan:</strong> ${author.lifespan}</p>
            <p><strong>Notable Works:</strong> ${author.notableWorks.join(", ")}</p>
            <p><strong>Awards:</strong> ${author.awards.join(", ")}</p>
            <h3>Books</h3>
            <p>${bookRecommendations[genre]}</p>
        `;
        detailsSection.classList.add("fade-in");
    });
});


