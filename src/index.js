import "./styles.css";
import loadHome from "./home.js";
import logoImage from "./assets/images/logo.png";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const aboutBtn = document.getElementById("about-btn");
  const contactBtn = document.getElementById("contact-btn");
  const pageButtons = {
    home: homeBtn,
    menu: menuBtn,
    about: aboutBtn,
    contact: contactBtn,
  };
  const pageTitles = {
    home: "Bili-Bili Bistro",
    menu: "Menu | Bili-Bili Bistro",
    about: "About | Bili-Bili Bistro",
    contact: "Bookings | Bili-Bili Bistro",
  };

  function installBrandAssets() {
    const logoMark = document.getElementById("logo-mark");

    if (logoMark) {
      logoMark.src = logoImage;
    }

    const favicon =
      document.querySelector("link[rel='icon']") || document.createElement("link");

    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = logoImage;

    if (!favicon.parentNode) {
      document.head.appendChild(favicon);
    }
  }

  function clearContent() {
    content.innerHTML = "";
  }

  function setActivePage(pageName) {
    Object.entries(pageButtons).forEach(([buttonPage, button]) => {
      button.classList.remove("active");
      button.removeAttribute("aria-current");

      if (buttonPage === pageName) {
        button.classList.add("active");
        button.setAttribute("aria-current", "page");
      }
    });

    document.title = pageTitles[pageName];
  }

  async function loadMenuPage() {
    const { default: loadMenu } = await import("./menu.js");

    clearContent();
    loadMenu();
  }

  async function loadContactPage() {
    const { default: loadContact } = await import("./contact.js");

    clearContent();
    loadContact();
    attachReservationFormEvent();
  }

  async function loadAboutPage() {
    const { default: loadAbout } = await import("./about.js");

    clearContent();
    loadAbout();
  }

  function loadHomePage() {
    clearContent();
    loadHome();
    attachHomeButtonEvent();
  }

  const pageLoaders = {
    home: loadHomePage,
    menu: loadMenuPage,
    about: loadAboutPage,
    contact: loadContactPage,
  };

  function getHashPageName() {
    return window.location.hash.replace("#", "");
  }

  function getPageFromHash() {
    const pageName = getHashPageName();

    return pageLoaders[pageName] ? pageName : "home";
  }

  async function renderPage() {
    const requestedPage = getHashPageName();
    const pageName = getPageFromHash();

    if (requestedPage && !pageLoaders[requestedPage]) {
      window.history.replaceState(null, "", `#${pageName}`);
    }

    await pageLoaders[pageName]();
    setActivePage(pageName);
    content.setAttribute("tabindex", "-1");
    content.focus({ preventScroll: true });
  }

  function navigateTo(pageName) {
    if (getHashPageName() === pageName) {
      renderPage();
      return;
    }

    window.location.hash = pageName;
  }

  homeBtn.addEventListener("click", () => navigateTo("home"));

  menuBtn.addEventListener("click", () => navigateTo("menu"));

  aboutBtn.addEventListener("click", () => navigateTo("about"));

  contactBtn.addEventListener("click", () => navigateTo("contact"));

  function attachHomeButtonEvent() {
    const exploreMenuBtn = document.getElementById("explore-menu-btn");
    const reserveTableBtn = document.getElementById("reserve-table-btn");

    if (exploreMenuBtn) {
      exploreMenuBtn.addEventListener("click", () => navigateTo("menu"));
    }

    if (reserveTableBtn) {
      reserveTableBtn.addEventListener("click", () => navigateTo("contact"));
    }
  }

  function attachReservationFormEvent() {
    const reservationForm = document.getElementById("reservation-form");

    if (!reservationForm) return;

    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(reservationForm);
      const name = formData.get("name") || "Guest";
      const guests = formData.get("guests") || "Not specified";
      const date = formData.get("date") || "Not specified";
      const time = formData.get("time") || "Not specified";
      const message = formData.get("message") || "No extra notes";

      const subject = encodeURIComponent(`Reservation request from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}\nMessage: ${message}`,
      );

      window.location.href = `mailto:bookings@bilibistro.co.za?subject=${subject}&body=${body}`;
    });
  }

  installBrandAssets();
  window.addEventListener("hashchange", renderPage);
  renderPage();
});
