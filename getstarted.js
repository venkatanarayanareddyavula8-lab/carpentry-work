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

// ==================================================
// DARK MODE
// ==================================================

const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("craftNestDark", isDark);

  if (isDark) {
    darkToggle.innerHTML = '<i data-lucide="sun"></i>';

    darkToggle.setAttribute("aria-label", "Light Mode");
  } else {
    darkToggle.innerHTML = '<i data-lucide="moon"></i>';

    darkToggle.setAttribute("aria-label", "Dark Mode");
  }

  lucide.createIcons();
});

// ==================================================
// LOAD DARK MODE
// ==================================================

if (localStorage.getItem("craftNestDark") === "true") {
  document.body.classList.add("dark");

  darkToggle.innerHTML = '<i data-lucide="sun"></i>';

  darkToggle.setAttribute("aria-label", "Light Mode");

  lucide.createIcons();
}

// ==================================================
// RTL
// ==================================================

const rtlToggle = document.getElementById("rtlToggle");

rtlToggle.addEventListener("click", function () {
  document.body.classList.toggle("rtl");

  const isRTL = document.body.classList.contains("rtl");

  localStorage.setItem("craftNestRTL", isRTL);

  const rtlText = rtlToggle.querySelector("span");

  if (isRTL) {
    rtlText.textContent = "LTR";

    rtlToggle.setAttribute("aria-label", "Switch to LTR");
  } else {
    rtlText.textContent = "RTL";

    rtlToggle.setAttribute("aria-label", "Switch to RTL");
  }
});

// ==================================================
// LOAD RTL MODE
// ==================================================

if (localStorage.getItem("craftNestRTL") === "true") {
  document.body.classList.add("rtl");

  rtlToggle.querySelector("span").textContent = "LTR";

  rtlToggle.setAttribute("aria-label", "Switch to LTR");
}
