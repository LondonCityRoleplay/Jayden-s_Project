let currentPage = "home";

function showPage(id) {
  const current = document.querySelector(".page.active");
  const next = document.getElementById(id);

  if (!next || current?.id === id) return;

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    next.classList.add("active");
  }, 50);

  currentPage = id;
}

window.showPage = showPage;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  const home = document.getElementById("home");
  if (home) home.classList.add("active");
});
