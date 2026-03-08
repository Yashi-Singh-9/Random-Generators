async function getRandomEvent() {
    const res = await fetch("https://history.muffinlabs.com/date");
    const data = await res.json();

    if (data && data.data && data.data.Events && data.data.Events.length > 0) {
    const events = data.data.Events;
    const randomEvent = events[Math.floor(Math.random() * events.length)];

    document.getElementById("eventYear").innerText = randomEvent.year;
    document.getElementById("eventText").innerText = randomEvent.text;
    document.getElementById("eventCard").style.display = "block";
    } else {
    alert("Could not fetch historical events. Please try again.");
    }
}