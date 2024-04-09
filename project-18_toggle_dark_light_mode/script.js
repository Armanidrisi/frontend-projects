document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("mode-toggle");
    const body = document.body;
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Function to set dark mode state
    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            body.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }

    // Initial state based on local storage
    setDarkMode(isDarkMode);

    // Toggle dark mode when button is clicked
    button.addEventListener("click", () => {
        const newMode = !body.classList.contains("dark");
        setDarkMode(newMode);
    });
});

