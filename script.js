// Wait for the page to fully load before displaying content
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 2500); // Matches fadeOut animation time
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Genre Data (Example Genres)
const genres = {
    Fiction: ["J.K. Rowling", "George Orwell", "Jane Austen"],
    Mystery: ["Agatha Christie", "Arthur Conan Doyle", "Dan Brown"],
    ScienceFiction: ["Isaac Asimov", "Philip K. Dick", "H.G. Wells"],
    Fantasy: ["J.R.R. Tolkien", "C.S. Lewis", "Brandon Sanderson"],
    Horror: ["Stephen King", "H.P. Lovecraft", "Mary Shelley"]
};

// Author Data (Example)
const authors = {
    "J.K. Rowling": { born: "1965", notableWorks: ["Harry Potter"], awards: ["British Book Awards"], country: "UK" },
    "George Orwell": { born: "1903", died: "1950", notableWorks: ["1984", "Animal Farm"], country: "UK" },
    "Agatha Christie": { born: "1890", died: "1976", notableWorks: ["Murder on the Orient Express"], awards: ["Edgar Award"], country: "UK" }
};

// Books Data (Example)
const books = {
    "Harry Potter": { description: "A young wizard's journey through Hogwarts.", link: "https://example.com/harrypotter" },
    "1984": { description: "A dystopian novel about surveillance.", link: "https://example.com/1984" },
    "Murder on the Orient Express": { description: "A famous detective investigates a train murder.", link: "https://example.com/murderorient" }
};

// Function to Display Genres
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

// Function to Display Authors
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

// Function to Display Books
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
