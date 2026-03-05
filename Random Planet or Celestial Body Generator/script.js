document.getElementById("generate-btn").addEventListener("click", fetchRandomPlanet);

function fetchRandomPlanet() {
    fetch('https://randomuser.me/api/') 
        .then(response => response.json())
        .then(data => {
            const planet = data.results[0]; 
            displayPlanetInfo(planet);
        })
        .catch(error => {
            console.error('Error fetching planet data:', error);
            alert('Failed to load planet data');
        });
}

function displayPlanetInfo(planet) {
    document.getElementById("name").textContent = planet.name.first + " Planet";
    document.getElementById("type").textContent = "Rocky";
    document.getElementById("mass").textContent = (Math.random() * 5 + 1).toFixed(2); 
    document.getElementById("diameter").textContent = (Math.random() * 15000 + 3000).toFixed(0); 
    document.getElementById("distance").textContent = (Math.random() * 1000 + 50).toFixed(0); 
}
