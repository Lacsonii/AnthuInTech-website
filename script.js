document.addEventListener("DOMContentLoaded", () => {
  // Search toggle + clear
  const searchIcon  = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");

  if (searchIcon && searchInput && clearSearch) {
    searchIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      const hidden = searchInput.style.display === "" || searchInput.style.display === "none";
      searchInput.style.display = hidden ? "inline-block" : "none";
      if (hidden) searchInput.focus();
      if (!hidden) { searchInput.value = ""; clearSearch.style.display = "none"; }
    });

    searchInput.addEventListener("input", () => {
      clearSearch.style.display = searchInput.value ? "block" : "none";
    });

    clearSearch.addEventListener("click", (e) => {
      e.stopPropagation();
      searchInput.value = "";
      clearSearch.style.display = "none";
      searchInput.focus();
    });
  }

  // Language dropdown
  const langSelector = document.getElementById("languageSelector");
  const langBtn      = document.getElementById("langBtn");
  const langMenu     = document.getElementById("langMenu");

  function closeLangMenu() {
    langSelector.classList.remove("is-open");
    langBtn.setAttribute("aria-expanded", "false");
  }
  function toggleLangMenu() {
    const open = !langSelector.classList.contains("is-open");
    if (open) {
      langSelector.classList.add("is-open");
      langBtn.setAttribute("aria-expanded", "true");
    } else {
      closeLangMenu();
    }
  }

  if (langSelector && langBtn && langMenu) {
    // Open/close on button click
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangMenu();
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!langSelector.contains(e.target)) closeLangMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenu();
    });

    // Example: handle menu item click
    langMenu.querySelectorAll("li").forEach(li => {
      li.addEventListener("click", () => {
        // do something with li.textContent (e.g., switch language)
        closeLangMenu();
      });
    });
  }
});
