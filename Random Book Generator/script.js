async function getRandomBook() {
    try {
    // Fetch a random book from Open Library (using the random endpoint)
    const res = await fetch('https://openlibrary.org/subjects/fiction.json?limit=1&offset=' + Math.floor(Math.random() * 1000));
    const data = await res.json();
    const book = data.works[0];

    // Display book details
    document.getElementById("bookCard").style.display = "block";
    document.getElementById("bookTitle").innerText = book.title || "Untitled";
    document.getElementById("bookAuthor").innerText = book.authors ? book.authors.map(author => author.name).join(", ") : "Unknown Author";
    document.getElementById("bookDetails").innerText = book.first_publish_year ? `Published: ${book.first_publish_year}` : "Year Unknown";
    document.getElementById("bookImage").src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` || '';

    } catch (error) {
    console.error("Error fetching book:", error);
    alert("An error occurred while fetching the book.");
    }
}