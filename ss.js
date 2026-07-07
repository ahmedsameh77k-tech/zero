window.addEventListener("click", function () {
    const video = document.querySelector("video");

    if (video) {
        video.muted = false;
        video.play().catch(err => {
            console.log("Error:", err);
        });
    }
});


function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const clock = document.getElementById("clock");
    if (clock) {
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

updateClock();
setInterval(updateClock, 1000);

//
fetch("https://api.counterapi.dev/v1/zero-profile/views/up")
    .then(res => res.json())
    .then(data => {
        const views = document.getElementById("views");
        if (views) {
            views.textContent = data.count;
        }
    })
    .catch(err => {
        console.error("Counter Error:", err);
    });