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

      menuToggle.setAttribute("title", menuOpen ? "Close Menu" : "Open Menu");

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

      /*
          "open" = dropdown visibility

          DO NOT use "active" here.
          Active is only for the current page.
        */

      navDropdown.classList.toggle("open");
    });
  }

  /* ==================================================
     ACTIVE NAVIGATION
  ================================================== */

  function setActiveNavigation() {
    if (!mainNav) {
      return;
    }

    /* ==================================================
       REMOVE OLD ACTIVE STATES
    ================================================== */

    mainNav.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
    });

    /* ==================================================
       GET CURRENT PAGE
    ================================================== */

    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    /*
      If URL is root:
      example.com/
      treat it as index.html
    */

    if (!currentPage) {
      currentPage = "index.html";
    }

    /* ==================================================
       HOME ACTIVE
       index.html
       index1.html
    ================================================== */

    if (currentPage === "index.html" || currentPage === "index1.html") {
      if (homeDropdownButton) {
        homeDropdownButton.classList.add("active");
      }

      return;
    }

    /* ==================================================
       OTHER NAVIGATION LINKS
    ================================================== */

    const navLinks = mainNav.querySelectorAll(".nav-link[href]");

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href) {
        return;
      }

      /*
        Convert href to only filename.

        Examples:

        portfolio.html
        ./portfolio.html
        /portfolio.html

        All become:

        portfolio.html
      */

      const linkPage = href
        .split("/")
        .pop()
        .split("?")[0]
        .split("#")[0]
        .toLowerCase();

      /* ==================================================
         CURRENT PAGE MATCH
      ================================================== */

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }

  /* ==================================================
     APPLY ACTIVE NAVIGATION
  ================================================== */

  setActiveNavigation();

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
          }

          if (menuToggle) {
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            menuToggle.setAttribute("aria-label", "Open Menu");

            menuToggle.setAttribute("title", "Open Menu");

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

            menuToggle.setAttribute("aria-label", "Open Menu");

            menuToggle.setAttribute("title", "Open Menu");

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
        }

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        menuToggle.setAttribute("aria-label", "Open Menu");

        menuToggle.setAttribute("title", "Open Menu");

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
      }

      if (menuToggle) {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        menuToggle.setAttribute("aria-label", "Open Menu");

        menuToggle.setAttribute("title", "Open Menu");

        loadIcons();
      }
    }
  });
});
