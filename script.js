function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.querySelector(".dark-mode-toggle");
    darkModeButton.addEventListener("click", toggleDarkMode);
  });