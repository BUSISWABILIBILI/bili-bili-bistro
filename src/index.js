import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import logoImage from "./assets/images/logo.png";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

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

  function setActiveButton(activeButton) {
    const buttons = [homeBtn, menuBtn, contactBtn];

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    activeButton.classList.add("active");
  }

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
    attachHomeButtonEvent();
    setActiveButton(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
    setActiveButton(menuBtn);
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
    attachReservationFormEvent();
    setActiveButton(contactBtn);
  });

  function attachHomeButtonEvent() {
    const exploreMenuBtn = document.getElementById("explore-menu-btn");
    const reserveTableBtn = document.getElementById("reserve-table-btn");

    if (exploreMenuBtn) {
      exploreMenuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
        setActiveButton(menuBtn);
      });
    }

    if (reserveTableBtn) {
      reserveTableBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
        attachReservationFormEvent();
        setActiveButton(contactBtn);
      });
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
  loadHome();
  attachHomeButtonEvent();
  setActiveButton(homeBtn);
});
