function navigate(id) {
  const all = document.querySelectorAll("main section");

  all.forEach(sec => {
    sec.style.display = sec.id === id ? "block" : "none";
  });
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburger");

  if (menu) menu.classList.add("hidden");
  if (burger) burger.classList.remove("active");
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburger");

  if (!menu || !burger) return;

  const isOpen = !menu.classList.contains("hidden");

  if (isOpen) {
    menu.classList.add("hidden");
    burger.classList.remove("active");
  } else {
    menu.classList.remove("hidden");
    burger.classList.add("active");
  }
}

document.addEventListener("click", (e) => {
  const menu = document.getElementById("navMenu");
  const burger = document.getElementById("hamburger");

  if (!menu || !burger) return;

  const clickedInside = menu.contains(e.target);
  const clickedBurger = burger.contains(e.target);

  if (!clickedInside && !clickedBurger) {
    menu.classList.add("hidden");
    burger.classList.remove("active");
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

window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
window.navigate = navigate;
