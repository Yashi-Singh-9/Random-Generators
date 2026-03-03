  async function getBirdFact() {
    const factEl = document.getElementById('fact');

    try {
      // Simulated API endpoint (replace with a real one if available)
      const response = await fetch('https://some-random-api.com/facts/bird'); // Example: not guaranteed to work
      const data = await response.json();

      // Display the fact
      factEl.textContent = data.fact || "No fact found!";
    } catch (error) {
      factEl.textContent = "Could not fetch a fact. Try again later.";
      console.error("Error fetching bird fact:", error);
    }
  }