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
});
