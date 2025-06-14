// burger menu toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true" || false;
  burger.setAttribute("aria-expanded", !expanded);
  nav.classList.toggle("nav--open");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav__list a").forEach((link) =>
  link.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    nav.classList.remove("nav--open");
  })
);