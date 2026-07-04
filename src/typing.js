window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typedSubtitle");
  if (!el) return;

  const text = el.dataset.text || "";
  let i = 0;

  function type() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(type, 45);
    }
  }

  type();
});
