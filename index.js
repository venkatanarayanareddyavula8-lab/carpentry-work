/* ==================================================
   CRAFT NEST
   MAIN JAVASCRIPT
   MENU / DROPDOWN / FAQ / COUNTERS / HERO
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==================================================
     LUCIDE ICONS
  ================================================== */

  const refreshIcons = () => {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  };

  /* ==================================================
     ELEMENTS
  ================================================== */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const homeButton = document.getElementById("homeDropdownButton");
  const dropdown = document.querySelector(".nav-dropdown");
  const header = document.getElementById("siteHeader");

  /* ==================================================
     MENU ICON
  ================================================== */

  const setMenuIcon = (open = false) => {
    if (!menuToggle) return;

    menuToggle.innerHTML = open
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    menuToggle.setAttribute("aria-label", open ? "Close Menu" : "Open Menu");

    menuToggle.setAttribute("title", open ? "Close Menu" : "Menu");

    refreshIcons();
  };

  /* ==================================================
     CLOSE MENU
  ================================================== */

  const closeMenu = () => {
    if (mainNav) {
      mainNav.classList.remove("active");
    }

    /*
      IMPORTANT:
      Only close dropdown.
      Do NOT remove "active"
      because active = current page.
    */

    if (dropdown) {
      dropdown.classList.remove("open");
    }

    setMenuIcon(false);
  };

  /* ==================================================
     HAMBURGER MENU
  ================================================== */

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = mainNav.classList.toggle("active");

      setMenuIcon(isOpen);
    });
  }

  /* ==================================================
     HOME DROPDOWN
  ================================================== */

  if (homeButton && dropdown) {
    homeButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      /*
        "open" = dropdown state
        "active" = current page state

        So we only toggle "open" here.
      */

      dropdown.classList.toggle("open");
    });
  }

  /* ==================================================
     MOBILE NAVIGATION LINKS
  ================================================== */

  if (mainNav) {
    mainNav.querySelectorAll("a:not(.mobile-login)").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    });

    /* ==================================================
       MOBILE LOGIN
    ================================================== */

    const mobileLogin = mainNav.querySelector(".mobile-login");

    if (mobileLogin) {
      mobileLogin.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    }
  }

  /* ==================================================
     CLOSE MENU OUTSIDE
  ================================================== */

  document.addEventListener("click", (event) => {
    if (!mainNav || !menuToggle || window.innerWidth > 768) {
      return;
    }

    const menuIsOpen = mainNav.classList.contains("active");

    const clickedInsideMenu = mainNav.contains(event.target);

    const clickedToggle = menuToggle.contains(event.target);

    if (menuIsOpen && !clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  /* ==================================================
     HEADER SCROLL EFFECT
  ================================================== */

  const updateHeader = () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", updateHeader);

  updateHeader();

  /* ==================================================
     ACTIVE NAVIGATION
  ================================================== */

  const setActiveNavigation = () => {
    if (!mainNav) return;

    const currentPage =
      window.location.pathname.split("/").pop().toLowerCase() || "index.html";

    /* Remove old active state */

    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    /* ==================================================
       HOME
       HOME 1 + HOME 2
    ================================================== */

    if (
      currentPage === "index.html" ||
      currentPage === "index1.html" ||
      currentPage === ""
    ) {
      if (homeButton) {
        homeButton.classList.add("active");
      }

      return;
    }

    /* ==================================================
       PORTFOLIO
    ================================================== */

    if (currentPage === "portfolio.html") {
      const portfolio = mainNav.querySelector('a[href="portfolio.html"]');

      if (portfolio) {
        portfolio.classList.add("active");
      }

      return;
    }

    /* ==================================================
       MATERIALS & FINISHES
    ================================================== */

    if (currentPage === "materials.html") {
      const materials = mainNav.querySelector('a[href="materials.html"]');

      if (materials) {
        materials.classList.add("active");
      }

      return;
    }

    /* ==================================================
       PROCESS
    ================================================== */

    if (currentPage === "process.html") {
      const process = mainNav.querySelector('a[href="process.html"]');

      if (process) {
        process.classList.add("active");
      }

      return;
    }

    /* ==================================================
       CONTACT
    ================================================== */

    if (currentPage === "contact.html") {
      const contact = mainNav.querySelector('a[href="contact.html"]');

      if (contact) {
        contact.classList.add("active");
      }

      return;
    }
  };

  /* RUN ACTIVE NAVIGATION */

  setActiveNavigation();

  /* ==================================================
     RESPONSIVE RESET
  ================================================== */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* ==================================================
     FAQ ACCORDION
  ================================================== */

  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const current = question.closest(".faq-item");

      if (!current) return;

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== current) {
          item.classList.remove("active");
        }
      });

      current.classList.toggle("active");
    });
  });

  /* ==================================================
     COUNTERS
  ================================================== */

  document.querySelectorAll("[data-target]").forEach((counter) => {
    const target = Number(counter.dataset.target);

    if (!Number.isFinite(target)) return;

    const duration = 1500;

    const startTime = performance.now();

    const animateCounter = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const value = Math.floor(progress * target);

      counter.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  });

  /* ==================================================
     PREMIUM HERO FLOATING EFFECT
  ================================================== */

  const hero = document.querySelector(".premium-hero");

  const furniture = document.querySelectorAll(".floating-craft");

  if (hero && furniture.length) {
    hero.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 15;

      const y = (event.clientY / window.innerHeight - 0.5) * 15;

      furniture.forEach((item, index) => {
        const direction = index === 0 ? 1 : -1;

        item.style.transform = `translate(
                ${x * direction}px,
                ${y * direction}px
              )`;
      });
    });

    hero.addEventListener("mouseleave", () => {
      furniture.forEach((item) => {
        item.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ==================================================
     INITIAL ICON LOAD
  ================================================== */

  refreshIcons();
});
