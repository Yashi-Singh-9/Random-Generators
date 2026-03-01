async function fetchUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];

  document.getElementById("avatar").src = user.picture.large;
  document.getElementById("name").textContent = `${user.name.first} ${user.name.last}`;
  document.getElementById("email").textContent = user.email;
  document.getElementById("phone").textContent = user.phone;
  document.getElementById("location").textContent = `${user.location.city}, ${user.location.country}`;
}

document.getElementById("generate").addEventListener("click", fetchUser);

// Initial user load
fetchUser();
