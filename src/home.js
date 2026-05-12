import heroImage from "./assets/images/hero.jpg";

function loadHome() {
  const content = document.getElementById("content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const leftContent = document.createElement("div");
  leftContent.classList.add("hero-text");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "Johannesburg neighbourhood bistro";

  const heading = document.createElement("h2");
  heading.textContent = "Bold plates, warm tables, late-night sparkle.";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Settle in for flame-grilled signatures, fresh pastas, generous desserts, and a dining room built for lingering conversations.";

  const button = document.createElement("button");
  button.textContent = "Explore Menu";
  button.classList.add("hero-btn");
  button.id = "explore-menu-btn";

  const highlights = document.createElement("div");
  highlights.classList.add("hero-highlights");
  highlights.innerHTML = `
    <span><strong>10:00 - 22:00</strong> Daily service</span>
    <span><strong>24 Golden Street</strong> Johannesburg</span>
  `;

  leftContent.appendChild(eyebrow);
  leftContent.appendChild(heading);
  leftContent.appendChild(paragraph);
  leftContent.appendChild(button);
  leftContent.appendChild(highlights);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("hero-image");

  const image = document.createElement("img");

  image.src = heroImage;

  image.alt = "Table set with delicious food and drinks";

  imageContainer.appendChild(image);

  const imageBadge = document.createElement("div");
  imageBadge.classList.add("hero-badge");
  imageBadge.innerHTML = "<strong>Chef's table</strong><span>Seasonal dishes every week</span>";

  imageContainer.appendChild(imageBadge);

  const credit = document.createElement("p");
  credit.classList.add("image-credit");
  credit.innerHTML =
    'Photo by <a href="https://unsplash.com/@madebyswish" target="_blank">Emma Houghton</a> on Unsplash';

  imageContainer.appendChild(credit);

  heroSection.appendChild(leftContent);
  heroSection.appendChild(imageContainer);

  content.appendChild(heroSection);
}

export default loadHome;
