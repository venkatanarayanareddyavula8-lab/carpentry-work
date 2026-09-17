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

  const rtlToggle = document.getElementById("rtlToggle");

  const darkToggle = document.getElementById("darkToggle");

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
       MOBILE GET STARTED
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
     RTL TOGGLE
  ================================================== */

  if (rtlToggle) {
    rtlToggle.addEventListener("click", function () {
      document.body.classList.toggle("rtl");

      const rtlEnabled = document.body.classList.contains("rtl");

      rtlToggle.setAttribute(
        "aria-label",
        rtlEnabled ? "Switch to LTR" : "Switch to RTL",
      );

      rtlToggle.setAttribute(
        "title",
        rtlEnabled ? "Switch to LTR" : "Switch to RTL",
      );
    });
  }

  /* ==================================================
     DARK MODE
  ================================================== */

  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");

      const darkEnabled = document.body.classList.contains("dark");

      darkToggle.innerHTML = darkEnabled
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

      darkToggle.setAttribute(
        "aria-label",
        darkEnabled ? "Light Mode" : "Dark Mode",
      );

      darkToggle.setAttribute(
        "title",
        darkEnabled ? "Light Mode" : "Dark Mode",
      );

      loadIcons();
    });
  }

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
/* ==========================================
   CRAFT NEST - PREMIUM HERO JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ==========================================
     LUCIDE ICONS
  ========================================== */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  /* ==========================================
     COUNTER ANIMATION
  ========================================== */

  const counters = document.querySelectorAll(".counter");

  counters.forEach(function (counter) {
    const target = Number(counter.getAttribute("data-target"));

    let current = 0;

    const duration = 1500;

    const increment = target / (duration / 30);

    const timer = setInterval(function () {
      current += increment;

      if (current >= target) {
        counter.textContent = target;

        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 30);
  });

  /* ==========================================
     MOUSE FLOATING EFFECT
  ========================================== */

  const hero = document.querySelector(".premium-hero");

  const furniture = document.querySelectorAll(".floating-craft");

  if (hero) {
    hero.addEventListener("mousemove", function (event) {
      const x = (event.clientX / window.innerWidth - 0.5) * 15;

      const y = (event.clientY / window.innerHeight - 0.5) * 15;

      furniture.forEach(function (item, index) {
        const direction = index === 0 ? 1 : -1;

        item.style.transform = `translate(${x * direction}px, ${y * direction}px)`;
      });
    });

    hero.addEventListener("mouseleave", function () {
      furniture.forEach(function (item) {
        item.style.transform = "translate(0, 0)";
      });
    });
  }
});
