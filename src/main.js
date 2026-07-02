function toggleAccordion(el) {
  el.classList.toggle("active");
}

function toggleProject(el, event) {
  if (event) event.stopPropagation();
  el.classList.toggle("active");
}

window.toggleAccordion = toggleAccordion;
window.toggleProject = toggleProject;
