document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loadingScreen.style.display = "none";  // Hide loading animation
        mainContent.style.display = "block";   // Show the main website
    }, 2500);  // Adjust timing if needed
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Display Genres
function displayGenres() {
    const genreContainer = document.getElementById("genre-list");
    genreContainer.innerHTML = "";
    Object.keys(genres).forEach(genre => {
        const button = document.createElement("button");
        button.classList.add("genre");
        button.innerText = genre;
        button.addEventListener("click", () => displayAuthors(genre));
        genreContainer.appendChild(button);
    });
}

// Function to Show Authors
function displayAuthors(genre) {
    const authorContainer = document.getElementById("author-list");
    authorContainer.innerHTML = `<h2>Authors in ${genre}</h2>`;
    genres[genre].forEach(author => {
        const authorDiv = document.createElement("div");
        authorDiv.classList.add("author");
        const data = authors[author] || {};
        authorDiv.innerHTML = `<strong>${author}</strong><br>
            Born: ${data.born} ${data.died ? `- Died: ${data.died}` : ""} <br>
            Notable Works: ${data.notableWorks ? data.notableWorks.join(", ") : "Unknown"} <br>
            Country: ${data.country || "Unknown"} <br>
            <button onclick="displayBooks('${author}')">View Books</button>`;
        authorContainer.appendChild(authorDiv);
    });
}

// Function to Show Books
function displayBooks(author) {
    const bookContainer = document.getElementById("book-list");
    bookContainer.innerHTML = `<h2>Books by ${author}</h2>`;
    Object.keys(books).forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const data = books[book];
        bookDiv.innerHTML = `<strong>${book}</strong><br>
            ${data.description} <br>
            <a href="${data.link}" target="_blank">Read More</a>`;
        bookContainer.appendChild(bookDiv);
    });
}

// Initialize the website
displayGenres();

