// ==========================
// Hero Animation
// ==========================
window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 300);
});

// ==========================
// Typing Placeholder Effect
// ==========================
const searchInput = document.querySelector(".search-box input");

const texts = [
    "Search for Biryani...",
    "Search for Pizza...",
    "Search for Burger...",
    "Search for Cafes...",
    "Search for Restaurants..."
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        searchInput.setAttribute(
            "placeholder",
            texts[textIndex].substring(0, charIndex + 1)
        );
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        searchInput.setAttribute(
            "placeholder",
            texts[textIndex].substring(0, charIndex - 1)
        );
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// ==========================
// Scroll Animation
// ==========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".card, .collection-item, .app-content"
).forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ==========================
// Card Click Effect
// ==========================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        card.style.transform = "scale(0.95)";

        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);

        const title = card.querySelector("h3").innerText;

        alert(`Opening ${title}`);
    });
});

// ==========================
// Collection Effects
// ==========================
document.querySelectorAll(".collection-item").forEach(item => {

    item.addEventListener("mouseenter", () => {
        item.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translateY(0)";
    });

});

// ==========================
// App Link Validation
// ==========================
const emailInput =
    document.querySelector(".app-form input");

const button =
    document.querySelector(".app-form button");

button.addEventListener("click", () => {

    const email = emailInput.value.trim();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    button.innerHTML = "Sending...";

    setTimeout(() => {
        button.innerHTML = "✓ Sent";
        alert("App link sent successfully!");

        setTimeout(() => {
            button.innerHTML = "Share App Link";
        }, 2000);

    }, 1000);

});

// ==========================
// Navbar Scroll Effect
// ==========================
window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background =
            "rgba(0,0,0,0.8)";
        header.style.backdropFilter =
            "blur(10px)";
    } else {
        header.style.background =
            "transparent";
    }

});

// ==========================
// Logo Pulse Animation
// ==========================
const logo =
    document.querySelector(".hero-logo");

setInterval(() => {

    logo.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 2000
        }
    );

}, 2500);