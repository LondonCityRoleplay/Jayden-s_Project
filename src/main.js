const sections = ["about", "projects", "skills", "websites", "contact", "status"];

function navigate(id) {
  const all = document.querySelectorAll("main section");

  all.forEach(sec => {
    if (sec.id === id) {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburger");

  if (menu) menu.classList.add("hidden");
  if (burger) burger.classList.remove("active");
}

document.addEventListener("click", (e) => {
  const viewer = document.getElementById("docViewer");
  if (!viewer) return;

  const isInside = viewer.contains(e.target);
  const isButton = e.target.tagName === "BUTTON";

  if (!isInside && !isButton) {
    viewer.classList.add("hidden");
  }
});

function bootSequence() {
  const boot = document.getElementById("boot");
  const intro = document.getElementById("intro");
  const app = document.getElementById("app");

  if (!boot || !intro || !app) return;

  setTimeout(() => {
    boot.style.opacity = "0";
  }, 1200);

  setTimeout(() => {
    boot.style.display = "none";
    intro.classList.remove("hidden");
  }, 1800);

  setTimeout(() => {
    intro.style.opacity = "0";
  }, 3200);

  setTimeout(() => {
    intro.style.display = "none";
    app.classList.remove("hidden");

    navigate("about");
  }, 3800);
}

window.addEventListener("load", bootSequence);
