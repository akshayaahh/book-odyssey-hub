/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

/* General Styles */
body {
    font-family: 'Caveat', cursive;
    background-color: #f4f4f4; /* Light mode default */
    color: #333;
    transition: background 0.5s ease, color 0.5s ease;
}

/* Dark Mode */
.dark-mode {
    background-color: #000 !important;
    color: #fff !important;
}

/* Book Odyssey Hub Logo */
.logo {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    text-shadow: 2px 2px 10px rgba(255, 215, 0, 0.7); /* Optional glow */
    transition: all 0.5s ease;
}

/* Dark Mode Button */
#darkModeToggle {
    position: fixed;
    top: 10px;
    right: 10px;
    background: #222;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 5px;
    transition: background 0.3s ease;
}

#darkModeToggle:hover {
    background: #444;
}
