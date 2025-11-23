/* ============================
   DARK MODE TOGGLE
============================ */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle icon
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

/* ============================
   MOBILE MENU TOGGLE
============================ */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ============================
   SCROLL REVEAL EFFECT
============================ */
const revealElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.3 });

revealElements.forEach(el => observer.observe(el));
