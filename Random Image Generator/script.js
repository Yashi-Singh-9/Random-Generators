function loadRandomImage() {
    const image = document.getElementById('randomImage');
    // Add random query param to force reload
    image.src = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 10000)}`;
  }