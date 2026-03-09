async function getRandomCountry() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    if (countries.length > 0) {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];

        const name = randomCountry.name.common;
        const capital = randomCountry.capital ? randomCountry.capital[0] : "Unknown";
        const population = randomCountry.population.toLocaleString();
        const region = randomCountry.region;
        const flag = randomCountry.flags?.png || "";

        const currencies = randomCountry.currencies
            ? Object.values(randomCountry.currencies).map(c => `${c.name} (${c.symbol || ''})`).join(", ")
            : "N/A";

        const languages = randomCountry.languages
            ? Object.values(randomCountry.languages).join(", ")
            : "N/A";

        const mapsUrl = randomCountry.maps?.googleMaps || "#";

        document.getElementById("countryName").innerText = name;
        document.getElementById("flag").src = flag;
        document.getElementById("fact1").innerText = `Capital: ${capital}`;
        document.getElementById("fact2").innerText = `Population: ${population}`;
        document.getElementById("fact3").innerText = `Region: ${region}`;
        document.getElementById("fact4").innerText = `Currency: ${currencies}`;
        document.getElementById("fact5").innerText = `Languages: ${languages}`;
        document.getElementById("mapLink").href = mapsUrl;

        document.getElementById("countryCard").style.display = "block";
    } else {
        alert("Unable to load countries. Please try again.");
    }
}