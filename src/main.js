const sections = ["about", "projects", "skills", "contact", "focus", "github"];

function navigate(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openDoc(type) {
  const viewer = document.getElementById("docViewer");
  const content = document.getElementById("docContent");

  const docs = {
    readme: `
<h2>README</h2>
<p>This project is a personal portfolio showing systems, builds, and development work.</p>
<p>It is not intended for reuse, copying, or template usage without permission.</p>
<p>Includes frontend, backend, API work, Discord bots, and ongoing projects.</p>
`,

    license: `
<h2>LICENSE</h2>
<p>All rights reserved.</p>
<p>No permission is granted to copy, modify, or redistribute any part of this project.</p>
<p>Permission must be requested before any use.</p>
`
  };

  content.innerHTML = docs[type] || "";
  viewer.classList.remove("hidden");
}

document.addEventListener("click", (e) => {
  const viewer = document.getElementById("docViewer");
  if (!viewer) return;

  if (!viewer.contains(e.target) && e.target.tagName !== "BUTTON") {
    viewer.classList.add("hidden");
  }
});

function bootSequence() {
  const boot = document.getElementById("boot");
  const intro = document.getElementById("intro");
  const nav = document.getElementById("nav");
  const app = document.getElementById("app");

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
    nav.classList.remove("hidden");
    app.classList.remove("hidden");
  }, 3800);
}

window.addEventListener("load", bootSequence);
