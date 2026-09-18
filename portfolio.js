/* ==================================================
   CRAFT NEST
   MAIN JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ==================================================
     LUCIDE ICONS
  ================================================== */

  function loadIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  loadIcons();

  /* ==================================================
     ELEMENTS
  ================================================== */

  const menuToggle = document.getElementById("menuToggle");

  const mainNav = document.getElementById("mainNav");

  const homeDropdownButton = document.getElementById("homeDropdownButton");

  const navDropdown = document.querySelector(".nav-dropdown");

  const siteHeader = document.getElementById("siteHeader");

  /* ==================================================
     HAMBURGER MENU
  ================================================== */

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();

      mainNav.classList.toggle("active");

      const menuOpen = mainNav.classList.contains("active");

      menuToggle.setAttribute(
        "aria-label",
        menuOpen ? "Close Menu" : "Open Menu",
      );

      menuToggle.setAttribute("title", menuOpen ? "Close Menu" : "Menu");

      menuToggle.innerHTML = menuOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

      loadIcons();
    });
  }

  /* ==================================================
     HOME DROPDOWN
  ================================================== */

  if (homeDropdownButton && navDropdown) {
    homeDropdownButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      navDropdown.classList.toggle("open");

      navDropdown.classList.toggle(
        "active",
        navDropdown.classList.contains("open"),
      );
    });
  }

  /* ==================================================
     CLOSE MOBILE MENU WHEN LINK CLICKED
  ================================================== */

  if (mainNav) {
    const normalLinks = mainNav.querySelectorAll("a:not(.mobile-login)");

    normalLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove("active");

          if (navDropdown) {
            navDropdown.classList.remove("open");

            navDropdown.classList.remove("active");
          }

          if (menuToggle) {
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            menuToggle.setAttribute("aria-label", "Open Menu");

            menuToggle.setAttribute("title", "Menu");

            loadIcons();
          }
        }
      });
    });

    /* ==================================================
       MOBILE LOGIN
    ================================================== */

    const mobileLogin = mainNav.querySelector(".mobile-login");

    if (mobileLogin) {
      mobileLogin.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove("active");

          if (menuToggle) {
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            loadIcons();
          }
        }
      });
    }
  }

  /* ==================================================
     CLOSE MENU OUTSIDE
  ================================================== */

  document.addEventListener("click", function (event) {
    if (mainNav && menuToggle && window.innerWidth <= 768) {
      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        mainNav.classList.remove("active");

        if (navDropdown) {
          navDropdown.classList.remove("open");

          navDropdown.classList.remove("active");
        }

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        menuToggle.setAttribute("aria-label", "Open Menu");

        menuToggle.setAttribute("title", "Menu");

        loadIcons();
      }
    }
  });

  /* ==================================================
     HEADER SCROLL
  ================================================== */

  function handleScroll() {
    if (!siteHeader) {
      return;
    }

    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  /* ==================================================
     RESIZE SAFETY
  ================================================== */

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      if (mainNav) {
        mainNav.classList.remove("active");
      }

      if (navDropdown) {
        navDropdown.classList.remove("open");

        navDropdown.classList.remove("active");
      }

      if (menuToggle) {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        menuToggle.setAttribute("aria-label", "Open Menu");

        menuToggle.setAttribute("title", "Menu");

        loadIcons();
      }
    }
  });
});
