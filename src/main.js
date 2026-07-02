let currentPage = "home";

function show(id) {
  if (!id) return;
  if (id === currentPage) return;

  const current = document.getElementById(currentPage);
  const next = document.getElementById(id);

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    if (next) {
      next.classList.add("active");
    }
  }, 80);

  currentPage = id;
}

function init() {
  const pages = document.querySelectorAll(".page");

  // HARD RESET: which ensures clean state
  pages.forEach(p => p.classList.remove("active"));

  const home = document.getElementById("home");
  if (home) home.classList.add("active");

  currentPage = "home";
}

window.show = show;
window.addEventListener("DOMContentLoaded", init);
