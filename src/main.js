function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const next = document.getElementById(id);
  if (next) {
    next.classList.add("active");
  }

  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.remove("open");
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("open");
}

/* ===========================
   Accordion Toggle
=========================== */

function toggle(element) {
  element.classList.toggle("active");
}

/* ===========================
   Project Expand Toggle
=========================== */

function toggleProject(element) {
  element.classList.toggle("active");
}

/* ===========================
   Global Functions
=========================== */

window.showPage = showPage;
window.toggleMenu = toggleMenu;
window.toggle = toggle;
window.toggleProject = toggleProject;

/* ===========================
   Startup
=========================== */

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const home = document.getElementById("home");
  if (home) {
    home.classList.add("active");
  }
});
