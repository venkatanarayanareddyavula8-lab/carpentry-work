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
/* =========================================================
   CLIENT TESTIMONIALS
========================================================= */

const testimonials = [
  /* =========================================================
     TESTIMONIAL 01
     IMAGE: FIRST UPLOADED GIRL IMAGE
  ========================================================= */

  {
    image: "images/sarah.jpg",
    name: "Sarah Mitchell",
    role: "Interior Design Client",
    stars: "★★★★★",
    text: "The craftsmanship was exceptional. Every detail was carefully finished and the furniture fits our space perfectly.",
  },

  /* =========================================================
     TESTIMONIAL 02
     IMAGE: SECOND UPLOADED MAN IMAGE
  ========================================================= */

  {
    image: "images/dainel.jpg",
    name: "Daniel Carter",
    role: "Homeowner",
    stars: "★★★★★",
    text: "From the initial design to the final installation, the entire process was professional and beautifully executed.",
  },

  /* =========================================================
     TESTIMONIAL 03
     IMAGE: THIRD UPLOADED GIRL IMAGE
  ========================================================= */

  {
    image: "images/emma1.jpg",
    name: "Emma Wilson",
    role: "Residential Client",
    stars: "★★★★★",
    text: "The custom dining table completely transformed our space. The quality and attention to detail were outstanding.",
  },
];

/* =========================================================
   CURRENT TESTIMONIAL
========================================================= */

let currentTestimonial = 0;

/* =========================================================
   ELEMENTS
========================================================= */

const slide = document.getElementById("testimonialSlide");

const image = document.getElementById("testimonialImage");

const name = document.getElementById("testimonialName");

const role = document.getElementById("testimonialRole");

const stars = document.getElementById("testimonialStars");

const text = document.getElementById("testimonialText");

const count = document.getElementById("testimonialCount");

const nextButton = document.getElementById("testimonialNext");

const prevButton = document.getElementById("testimonialPrev");

/* =========================================================
   DISPLAY TESTIMONIAL
========================================================= */

function displayTestimonial(index) {
  const item = testimonials[index];

  /* IMAGE */

  image.src = item.image;

  image.alt = item.name;

  /* NAME */

  name.textContent = item.name;

  /* ROLE */

  role.textContent = item.role;

  /* STARS */

  stars.textContent = item.stars;

  /* TEXT */

  text.textContent = `“${item.text}”`;

  /* COUNT */

  count.textContent =
    `${String(index + 1).padStart(2, "0")} / ` +
    `${String(testimonials.length).padStart(2, "0")}`;
}

/* =========================================================
   NEXT TESTIMONIAL
========================================================= */

function nextTestimonial() {
  slide.classList.add("fade-out");

  setTimeout(() => {
    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }

    displayTestimonial(currentTestimonial);

    slide.classList.remove("fade-out");
  }, 500);
}

/* =========================================================
   PREVIOUS TESTIMONIAL
========================================================= */

function previousTestimonial() {
  slide.classList.add("fade-out");

  setTimeout(() => {
    currentTestimonial--;

    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }

    displayTestimonial(currentTestimonial);

    slide.classList.remove("fade-out");
  }, 500);
}

/* =========================================================
   NEXT BUTTON
========================================================= */

nextButton.addEventListener("click", () => {
  nextTestimonial();
});

/* =========================================================
   PREVIOUS BUTTON
========================================================= */

prevButton.addEventListener("click", () => {
  previousTestimonial();
});

/* =========================================================
   AUTO SLIDE
   EVERY 5 SECONDS
========================================================= */

let autoSlide = setInterval(() => {
  nextTestimonial();
}, 5000);

/* =========================================================
   PAUSE AUTO SLIDE ON HOVER
========================================================= */

slide.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

/* =========================================================
   RESUME AUTO SLIDE
========================================================= */

slide.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    nextTestimonial();
  }, 5000);
});

/* =========================================================
   INITIAL TESTIMONIAL
========================================================= */

displayTestimonial(currentTestimonial);
