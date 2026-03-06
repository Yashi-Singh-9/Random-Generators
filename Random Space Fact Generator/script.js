const apiKey = "vcsAhqdmjMmc4b2fzUgMykMJHpaIa3pYTX8ndmzP";
const factElement = document.getElementById("space-fact");
const imageElement = document.getElementById("space-image");
const button = document.getElementById("generate-fact");

button.addEventListener("click", fetchSpaceFact);

function fetchSpaceFact() {
  // Generate a random date between June 16, 1995 and today
  const startDate = new Date(1995, 5, 16);
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  const formattedDate = randomDate.toISOString().split("T")[0];

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`
  )
    .then((response) => response.json())
    .then((data) => {
      factElement.textContent = data.explanation;
      if (data.media_type === "image") {
        imageElement.src = data.url;
        imageElement.style.display = "block";
      } else {
        imageElement.style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      factElement.textContent =
        "Sorry, could not fetch a space fact at this time.";
      imageElement.style.display = "none";
    });
}
