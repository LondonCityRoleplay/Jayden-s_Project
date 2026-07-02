const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("show");
            e.target.classList.remove("fade");
        } else {
            e.target.classList.add("fade");
        }
    });
}, { threshold: 0.2 });

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(el => {
        observer.observe(el);
    });
});
