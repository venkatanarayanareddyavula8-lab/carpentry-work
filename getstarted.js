// ==================================================
// CRAFT NEST - CONTACT JS
// ==================================================

// ==================================================
// LUCIDE ICONS
// ==================================================

lucide.createIcons();

// ==================================================
// HEADER SCROLL
// ==================================================

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});
