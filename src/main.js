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

function toggleAccordion(el) {
  el.classList.toggle("active");
}

function toggleProject(el, event) {
  if (event) event.stopPropagation();
  el.classList.toggle("active");
}

function toggle(el) {
  const body = el.nextElementSibling;
  if (!body) return;
  body.classList.toggle("open");
}

/* LIVE TAB SYSTEM */
function switchTab(site, el) {
  const frame = document.getElementById("previewFrame");
  if (!frame) return;

  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  el.classList.add("active");

  if (site === "Axion Labs") {
    frame.src = "https://axion-labs.dev";
  }

  if (site === "Axion Labs Bot") {
    frame.src = "https://axionlabs.cc";
  }

  if (site === "London City Roleplay") {
    frame.src = "https://londoncityroleplay.org";
  }
}

/* GLOBAL EXPORTS */
window.showPage = showPage;
window.toggleMenu = toggleMenu;
window.toggleAccordion = toggleAccordion;
window.toggleProject = toggleProject;
window.toggle = toggle;
window.switchTab = switchTab;

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  const home = document.getElementById("home");
  if (home) home.classList.add("active");
});
