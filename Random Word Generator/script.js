   async function getRandomWordWithMeaning() {
      const wordElement = document.getElementById("word");
      const meaningElement = document.getElementById("meaning");

      wordElement.textContent = "Loading...";
      meaningElement.textContent = "";

      try {
        const wordRes = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        const wordData = await wordRes.json();
        const word = wordData[0];

        wordElement.textContent = word;

        const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const dictData = await dictRes.json();

        if (dictData[0]?.meanings?.length) {
          const meaning = dictData[0].meanings[0].definitions[0].definition;
          meaningElement.textContent = `Meaning: ${meaning}`;
        } else {
          meaningElement.textContent = "No definition found.";
        }

      } catch (error) {
        console.error("Error:", error);
        wordElement.textContent = "Error fetching word!";
        meaningElement.textContent = "";
      }
    }

    document.getElementById("generateBtn").addEventListener("click", getRandomWordWithMeaning);