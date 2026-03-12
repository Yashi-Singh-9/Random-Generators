    async function getRandomPainting() {
      try {
        // Step 1: Search for paintings with images in the Paintings department (ID: 11)
        const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting';
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        const objectIDs = searchData.objectIDs;

        if (!objectIDs || objectIDs.length === 0) {
          alert("No paintings found.");
          return;
        }

        // Step 2: Pick a random object ID
        const randomID = objectIDs[Math.floor(Math.random() * objectIDs.length)];

        // Step 3: Fetch object details
        const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`;
        const objectRes = await fetch(objectUrl);
        const objectData = await objectRes.json();

        // Display data
        document.getElementById("artCard").style.display = "block";
        document.getElementById("artTitle").innerText = objectData.title || "Untitled";
        document.getElementById("artImage").src = objectData.primaryImageSmall || "";
        document.getElementById("artArtist").innerText = objectData.artistDisplayName || "Unknown Artist";
        document.getElementById("artDate").innerText = objectData.objectDate || "Date Unknown";
      } catch (error) {
        console.error("Error fetching painting:", error);
        alert("An error occurred while fetching the painting.");
      }
    }