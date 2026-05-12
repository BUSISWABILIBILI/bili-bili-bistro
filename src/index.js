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

  loadHome();
  setActiveButton(homeBtn);
});
