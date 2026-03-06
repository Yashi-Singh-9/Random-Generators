async function getRandomWord() {
    const res = await fetch("https://api.urbandictionary.com/v0/random");
    const data = await res.json();

    if (data && data.list && data.list.length > 0) {
    const randomEntry = data.list[0];
    document.getElementById("word").innerText = randomEntry.word;
    document.getElementById("definition").innerText = randomEntry.definition;
    document.getElementById("permalink").href = randomEntry.permalink;
    document.getElementById("wordCard").style.display = "block";
    } else {
    alert("Could not fetch a word. Please try again.");
    }
}