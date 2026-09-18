// ==================================================
// CRAFT NEST - CONTACT JS
// ==================================================

// ==================================================
// LUCIDE ICONS
// ==================================================

document.addEventListener("DOMContentLoaded", function () {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// ==================================================
// HEADER SCROLL
// ==================================================

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", function () {
  if (siteHeader) {
    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }
});
