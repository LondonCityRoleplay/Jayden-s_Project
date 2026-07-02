window.addEventListener("load", () => {
    const boot = document.getElementById("boot");
    const intro = document.getElementById("intro");
    const app = document.getElementById("app");
    const nav = document.getElementById("nav");

    setTimeout(() => {
        boot.style.display = "none";
        intro.classList.remove("hidden");

        setTimeout(() => {
            intro.style.opacity = "0";

            setTimeout(() => {
                intro.style.display = "none";
                app.classList.remove("hidden");
                nav.classList.remove("hidden");
            }, 600);

        }, 1500);

    }, 1000);
});

function navigate(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

const map = {
    discord: "Discord layer handles system events",
    bot: "Automation and command layer",
    api: "Core REST communication layer",
    db: "Persistent storage systems",
    web: "Frontend dashboard layer",
    mobile: "Mobile integration layer"
};

function focusNode(key) {
    const panel = document.getElementById("detailPanel");
    if (!panel) return;
    panel.innerText = map[key] || "";
}
