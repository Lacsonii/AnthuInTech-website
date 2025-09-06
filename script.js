document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    searchIcon.addEventListener("click", () => {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "inline-block";
            searchInput.focus();
        } else {
            searchInput.style.display = "none";
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
    const langIcon = document.getElementById("langIcon");
    const langMenu = document.getElementById("langMenu");

    // Toggle dropdown when clicking globe
    langIcon.addEventListener("click", () => {
        langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!langIcon.contains(event.target) && !langMenu.contains(event.target)) {
            langMenu.style.display = "none";
        }
    });
});

});
