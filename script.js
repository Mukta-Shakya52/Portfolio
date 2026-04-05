// 🔥 AOS INIT (scroll animations)
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});


// ⌨️ Typing Effect (Smooth + Bug Fix)
const text = ["Engineering Enthusiast", "Problem Solver", "Developer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 40 : 80);
}

type();


// 🚀 Smooth Scroll to Section (Better offset for navbar)
function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 80; // adjust if navbar height changes

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}


// ⬆️ Back to Top Button (Smooth + Fade)
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        topBtn.style.opacity = "1";
        topBtn.style.transform = "scale(1)";
    } else {
        topBtn.style.opacity = "0";
        topBtn.style.transform = "scale(0.8)";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 🌗 Dark/Light Mode Toggle (FIXED - safe check)
const toggleBtn = document.getElementById("toggle");

if (toggleBtn) {
    toggleBtn.onclick = function () {
        document.body.classList.toggle("light");
    };
}


// ✨ PARTICLES BACKGROUND (match your theme now)
tsParticles.load("particles-js", {
    particles: {
        number: { value: 50 },
        size: { value: 2 },
        move: { speed: 1 },
        color: { value: "#cfff75" }, // changed to match UI
        links: {
            enable: true,
            color: "#cfff75",
            distance: 120,
            opacity: 0.3
        }
    },
    background: {
        color: "transparent"
    }
});