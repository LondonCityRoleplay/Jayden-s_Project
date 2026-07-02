function navigate(id) {
  const all = document.querySelectorAll("main section");

  all.forEach(sec => {
    sec.style.display = sec.id === id ? "block" : "none";
  });
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  if (!menu) return;

  menu.classList.toggle("open");
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  if (!menu) return;

  menu.classList.remove("open");
}

function bootSequence() {
  const boot = document.getElementById("boot");
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");

  setTimeout(() => {
    if (boot) boot.style.opacity = "0";
  }, 1200);

  setTimeout(() => {
    if (boot) boot.style.display = "none";
  }, 1800);

  setTimeout(() => {
    if (intro) intro.remove();

    if (app) {
      app.style.display = "block";
    }

    document.querySelectorAll("main section").forEach(sec => {
      sec.style.display = "none";
    });

    navigate("about");
  }, 3800);
}

window.addEventListener("load", bootSequence);

window.navigate = navigate;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
