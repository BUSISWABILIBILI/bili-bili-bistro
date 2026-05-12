import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const contactBtn = document.getElementById("contact-btn");

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
        setActiveButton(contactBtn);
      });
    }
  }

  loadHome();
  attachHomeButtonEvent();
  setActiveButton(homeBtn);
});
