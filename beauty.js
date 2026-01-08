// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
    target.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
    }
});
});

// Parallax effect for decorative lines
window.addEventListener("scroll", () => {
const scrolled = window.pageYOffset;

const lines = document.querySelectorAll(".line");
lines.forEach((line, index) => {
    const speed = (index + 1) * 0.3;
    line.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
});
});

// Product card interaction
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
card.addEventListener("mouseenter", function () {
    this.style.zIndex = "10";
});

card.addEventListener("mouseleave", function () {
    this.style.zIndex = "1";
});
});

// Intersection Observer for smooth transitions on scroll
const observerOptions = {
threshold: 0.15,
rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    }
});
}, observerOptions);

// Observe sections
const featuredSection = document.querySelector(".featured-section");
const parallaxSection = document.querySelector(".parallax-section");
const showcaseHeader = document.querySelector(".showcase-header");

observer.observe(featuredSection);
observer.observe(parallaxSection);
observer.observe(showcaseHeader);

// Observe product cards with staggered animation
productCards.forEach((card, index) => {
card.style.transitionDelay = `${index * 0.1}s`;
observer.observe(card);
});