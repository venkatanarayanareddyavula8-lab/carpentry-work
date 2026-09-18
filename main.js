/* ==================================================
   CRAFT NEST
   GLOBAL WEBSITE MODE
   RTL + DARK MODE
   LOCAL STORAGE
================================================== */

(function () {
  /* ==================================================
     APPLY ALL MODES
  ================================================== */

  function applyModes() {
    const rtlEnabled = localStorage.getItem("craftNestRTL") === "enabled";

    const darkEnabled = localStorage.getItem("craftNestDark") === "enabled";

    /* ==================================================
       HTML
    ================================================== */

    document.documentElement.dir = rtlEnabled ? "rtl" : "ltr";

    document.documentElement.classList.toggle("rtl", rtlEnabled);

    document.documentElement.classList.toggle("dark", darkEnabled);

    /* ==================================================
       BODY
    ================================================== */

    if (document.body) {
      document.body.classList.toggle("rtl", rtlEnabled);

      document.body.classList.toggle("dark", darkEnabled);
    }

    /* ==================================================
       RTL BUTTON
    ================================================== */

    const rtlButton = document.getElementById("rtlToggle");

    if (rtlButton) {
      rtlButton.setAttribute(
        "aria-label",
        rtlEnabled ? "Switch to LTR" : "Switch to RTL",
      );

      rtlButton.setAttribute(
        "title",
        rtlEnabled ? "Switch to LTR" : "Switch to RTL",
      );
    }

    /* ==================================================
       DARK BUTTON
    ================================================== */

    const darkButton = document.getElementById("darkToggle");

    if (darkButton) {
      darkButton.setAttribute(
        "aria-label",
        darkEnabled ? "Switch to Light Mode" : "Switch to Dark Mode",
      );

      darkButton.setAttribute(
        "title",
        darkEnabled ? "Switch to Light Mode" : "Switch to Dark Mode",
      );

      /* ==================================================
         DARK ICON
      ================================================== */

      const icon = darkButton.querySelector("[data-lucide]");

      if (icon) {
        icon.setAttribute("data-lucide", darkEnabled ? "sun" : "moon");

        if (
          typeof lucide !== "undefined" &&
          typeof lucide.createIcons === "function"
        ) {
          lucide.createIcons();
        }
      }
    }
  }

  /* ==================================================
     APPLY BEFORE PAGE IS READY
  ================================================== */

  applyModes();

  /* ==================================================
     PAGE READY
  ================================================== */

  document.addEventListener("DOMContentLoaded", function () {
    applyModes();

    /* ==================================================
         RTL TOGGLE
      ================================================== */

    const rtlButton = document.getElementById("rtlToggle");

    if (rtlButton) {
      rtlButton.addEventListener("click", function () {
        const current = localStorage.getItem("craftNestRTL") === "enabled";

        localStorage.setItem("craftNestRTL", current ? "disabled" : "enabled");

        applyModes();
      });
    }

    /* ==================================================
         DARK MODE TOGGLE
      ================================================== */

    const darkButton = document.getElementById("darkToggle");

    if (darkButton) {
      darkButton.addEventListener("click", function () {
        const current = localStorage.getItem("craftNestDark") === "enabled";

        localStorage.setItem("craftNestDark", current ? "disabled" : "enabled");

        applyModes();
      });
    }
  });
})();
