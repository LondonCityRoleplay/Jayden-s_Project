let currentPage = "home";

/* PAGE SWITCHING */
function showPage(id) {
  const current = document.querySelector(".page.active");
  const next = document.getElementById(id);

  if (!next || current?.id === id) return;

  if (current) current.classList.remove("active");

  setTimeout(() => {
    next.classList.add("active");
  }, 60);

  currentPage = id;

  // close menu after the selection
  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("open");
}

/* TOGGLE MENU */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("open");
}

/* INIT */
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  const home = document.getElementById("home");
  if (home) home.classList.add("active");
});

/* GLOBAL ACCESS */
window.showPage = showPage;
window.toggleMenu = toggleMenu;
