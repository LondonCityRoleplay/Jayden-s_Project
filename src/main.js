function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(p => {
    p.classList.remove("active");
  });

  const next = document.getElementById(id);
  if (next) next.classList.add("active");

  const menu = document.getElementById("menu");
  if (menu) menu.classList.remove("open");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("open");
}

window.showPage = showPage;
window.toggleMenu = toggleMenu;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  const home = document.getElementById("home");
  if (home) home.classList.add("active");
});
