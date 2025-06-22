const toggleButton = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".primary-navigation");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
