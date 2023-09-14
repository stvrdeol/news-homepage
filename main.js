import "./style.css";
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuOpen = document.querySelector("#mobile-menu-open");
const mobileMenuClose = document.querySelector("#mobile-menu-close");

mobileMenuOpen.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-[200vw]");
});
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-[200vw]");
});
