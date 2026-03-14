    async function getRandomWiki() {
      try {
        // Step 1: Get a random page title
        const randomRes = await fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random&rnnamespace=0&rnlimit=1');
        const randomData = await randomRes.json();
        const title = randomData.query.random[0].title;

        // Step 2: Get page summary
        const summaryRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
        const summary = await summaryRes.json();

        // Step 3: Display
        document.getElementById("articleCard").style.display = "block";
        document.getElementById("articleTitle").innerText = summary.title;
        document.getElementById("articleSnippet").innerText = summary.extract;
        document.getElementById("articleLink").href = summary.content_urls.desktop.page;
      } catch (err) {
        console.error("Error fetching Wikipedia article:", err);
        alert("Failed to load article.");
      }
    }