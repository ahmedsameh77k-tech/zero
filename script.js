document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });
    }

    const envelope = document.getElementById('envelope');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const mainCard = document.getElementById('mainCard');
    const musicBtn = document.getElementById('musicToggle');
    const audio = document.getElementById('bgMusic');
    const musicText = document.getElementById('musicText');
    let isPlaying = false;

    if (envelope) {
        envelope.addEventListener('click', () => {
            envelope.classList.add('open');

            if (audio) {
                audio.play().then(() => {
                    isPlaying = true;
                    if (musicText) musicText.innerText = "Pause";
                    if (musicBtn) {
                        musicBtn.style.backgroundColor = "#e74c3c";
                        musicBtn.style.color = "#ffffff";
                    }
                }).catch(() => {});
            }

            setTimeout(() => {
                envelopeWrapper.classList.add('fade-out');
                mainCard.classList.add('show');
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }, 600);
        });
    }

    if (musicBtn && audio) {
        musicBtn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play();
                if (musicText) musicText.innerText = "Pause";
                musicBtn.style.backgroundColor = "#e74c3c";
                musicBtn.style.color = "#ffffff";
                isPlaying = true;
            } else {
                audio.pause();
                if (musicText) musicText.innerText = "Melody";
                musicBtn.style.backgroundColor = "#ffffff";
                musicBtn.style.color = "#2c3e50";
                isPlaying = false;
            }
        });
    }

    function startPetals() {
        const petals = ['💐', '🌸', '🌹'];
        const totalPetals = 10;

        for (let i = 0; i < totalPetals; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal-emoji';
            
            const randomIndex = Math.floor(Math.random() * petals.length);
            petal.innerHTML = petals[randomIndex];

            petal.style.left = (Math.random() * 100) + 'vw';
            petal.style.fontSize = (Math.random() * 12 + 18) + 'px';
            petal.style.animationDuration = (Math.random() * 4 + 4) + 's';
            petal.style.animationDelay = (Math.random() * 5) + 's';

            document.body.appendChild(petal);
        }
    }

    startPetals();
});

const eventDate = new Date("September 1, 2026 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const dEl = document.getElementById("days");
        const hEl = document.getElementById("hours");
        const mEl = document.getElementById("minutes");
        const sEl = document.getElementById("seconds");

        if (dEl) dEl.innerText = days < 10 ? "0" + days : days;
        if (hEl) hEl.innerText = hours < 10 ? "0" + hours : hours;
        if (mEl) mEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (sEl) sEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();