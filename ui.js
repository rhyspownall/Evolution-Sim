import {
    sidebarToggle,
    sidebarContent
} from "./state.js"

function setSidebarOpen(open) {
    document.body.classList.toggle("sidebar-open", open);
    sidebarToggle.setAttribute("aria-expanded", String(open));
    sidebarToggle.setAttribute("aria-label", open ? "Close side panel" : "Open side panel");
    sidebarContent.inert = !open;
}

sidebarToggle.addEventListener("click", () => {
    setSidebarOpen(!document.body.classList.contains("sidebar-open"));
});