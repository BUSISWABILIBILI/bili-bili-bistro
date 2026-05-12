function loadHome() {
  const content = document.getElementById("content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Bili-Bili Bistro";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experience the best of culinary delights in a cozy and inviting atmosphere. Our menu features a fusion of flavors that will tantalize your taste buds. Join us for an unforgettable dining experience!";

  const button = document.createElement("button");
  button.textContent = "View Menu";
  button.classList.add("menu-button");

  heroSection.appendChild(heading);
  heroSection.appendChild(paragraph);
  heroSection.appendChild(button);

  content.appendChild(heroSection);
}

export default loadHome;
