    const catBtn = document.getElementById("catBtn");
    const dogBtn = document.getElementById("dogBtn");
    const imageContainer = document.getElementById("imageContainer");

    catBtn.addEventListener("click", async () => {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      const imgUrl = data[0].url;
      showImage(imgUrl);
    });

    dogBtn.addEventListener("click", async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const imgUrl = data.message;
      showImage(imgUrl);
    });

    function showImage(url) {
      imageContainer.innerHTML = `<img src="${url}" alt="Random animal" />`;
    }