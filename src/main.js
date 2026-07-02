function navigate(id) {
  const all = document.querySelectorAll("main section");

  all.forEach(sec => {
    sec.style.display = sec.id === id ? "block" : "none";
  });
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (!menu) return;

  menu.classList.toggle("hidden");
}

function closeMenu() {
  const menu = document.getElementById("navMenu");

  if (menu) menu.classList.add("hidden");
}

function bootSequence() {
  const boot = document.getElementById("boot");
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");

  if (!boot || !intro || !app) return;

  setTimeout(() => boot.style.opacity = "0", 1200);

  setTimeout(() => {
    boot.style.display = "none";
    intro.classList.remove("hidden");
  }, 1800);

  setTimeout(() => intro.style.opacity = "0", 3200);

  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");
    navigate("about");
  }, 3800);
}

window.addEventListener("load", bootSequence);

window.navigate = navigate;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
