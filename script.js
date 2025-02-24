function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.querySelector(".dark-mode-toggle");

    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

    darkModeButton.textContent = isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode";
    darkModeButton.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
}

document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.querySelector(".dark-mode-toggle");

    if (!darkModeButton) return;

    if (localStorage.getItem("darkMode") == "enabled") {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Toggle Light Mode";
        darkModeButton.setAttribute("aria-label", "Switch to light mode");
    }
    darkModeButton.addEventListener("click", toggleDarkMode);
})