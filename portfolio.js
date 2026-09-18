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

            menuToggle.setAttribute("aria-label", "Open Menu");

            menuToggle.setAttribute("title", "Menu");

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
     ACTIVE NAVIGATION
  ================================================== */

  function setActiveNavigation() {
    if (!mainNav) {
      return;
    }

    /* ==================================================
       REMOVE ALL ACTIVE STATES
    ================================================== */

    mainNav.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
    });

    /* ==================================================
       GET CURRENT PAGE
    ================================================== */

    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    if (currentPage === "" || currentPage === "/") {
      currentPage = "index.html";
    }

    /* ==================================================
       HOME
    ================================================== */

    if (currentPage === "index.html" || currentPage === "index1.html") {
      if (homeDropdownButton) {
        homeDropdownButton.classList.add("active");
      }

      return;
    }

    /* ==================================================
       PORTFOLIO
    ================================================== */

    if (currentPage === "portfolio.html") {
      const portfolioLink = mainNav.querySelector('a[href*="portfolio.html"]');

      if (portfolioLink) {
        portfolioLink.classList.add("active");
      }

      return;
    }

    /* ==================================================
       MATERIALS
    ================================================== */

    if (currentPage === "materials.html") {
      const materialsLink = mainNav.querySelector('a[href*="materials.html"]');

      if (materialsLink) {
        materialsLink.classList.add("active");
      }

      return;
    }

    /* ==================================================
       PROCESS
    ================================================== */

    if (currentPage === "process.html") {
      const processLink = mainNav.querySelector('a[href*="process.html"]');

      if (processLink) {
        processLink.classList.add("active");
      }

      return;
    }

    /* ==================================================
       CONTACT
    ================================================== */

    if (currentPage === "contact.html") {
      const contactLink = mainNav.querySelector('a[href*="contact.html"]');

      if (contactLink) {
        contactLink.classList.add("active");
      }

      return;
    }
  }

  /* ==================================================
     APPLY ACTIVE NAVIGATION
  ================================================== */

  setActiveNavigation();

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

        menuToggle.setAttribute("title", "Menu");

        loadIcons();
      }
    }
  });
});

/* ==================================================
   FAQ
================================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const currentItem = question.parentElement;

    document.querySelectorAll(".faq-item").forEach(function (item) {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    currentItem.classList.toggle("active");
  });
});
