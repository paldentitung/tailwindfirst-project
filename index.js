const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  let nav = document.querySelector("nav ul");
  nav.classList.toggle("hidden");
  menuBtn.classList.toggle("open");
});
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intro.classList.remove("opacity-0", "translate-y-5");
          intro.classList.add("animate-fadeInUp");
          observer.unobserve(intro); // Animate once only
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(intro);
});
