import heroImage from "./assets/images/hero.jpg";
import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import burgerImage from "./assets/images/burger.jpg";
import dessertImage from "./assets/images/dessert.jpg";

function loadHome() {
  const content = document.getElementById("content");

  const page = document.createElement("div");
  page.classList.add("home-page");

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

  const reserveButton = document.createElement("button");
  reserveButton.textContent = "Reserve a Table";
  reserveButton.classList.add("hero-btn", "hero-btn-secondary");
  reserveButton.id = "reserve-table-btn";

  const heroActions = document.createElement("div");
  heroActions.classList.add("hero-actions");
  heroActions.appendChild(button);
  heroActions.appendChild(reserveButton);

  const highlights = document.createElement("div");
  highlights.classList.add("hero-highlights");
  highlights.innerHTML = `
    <span><strong>Open today</strong> 10:00 - 22:00</span>
    <span><strong>Walk-ins welcome</strong> Reservations recommended</span>
    <span><strong>24 Golden Street</strong> Johannesburg</span>
  `;

  leftContent.appendChild(eyebrow);
  leftContent.appendChild(heading);
  leftContent.appendChild(paragraph);
  leftContent.appendChild(heroActions);
  leftContent.appendChild(highlights);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("hero-image");

  const image = document.createElement("img");

  image.src = heroImage;

  image.alt = "Table set with delicious food and drinks";
  image.decoding = "async";
  image.fetchPriority = "high";

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

  const storySection = document.createElement("section");
  storySection.classList.add("restaurant-story");
  storySection.innerHTML = `
    <div>
      <p class="eyebrow">The experience</p>
      <h2>Modern comfort food with a Johannesburg pulse.</h2>
    </div>
    <p>
      Bili-Bili Bistro brings together flame-grilled favourites, polished service,
      and a welcoming room made for weeknight dinners, birthdays, date nights,
      and slow weekend lunches.
    </p>
  `;

  const featureSection = document.createElement("section");
  featureSection.classList.add("signature-section");
  featureSection.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Chef picks</p>
      <h2>Signature plates guests come back for.</h2>
    </div>
  `;

  const signatureGrid = document.createElement("div");
  signatureGrid.classList.add("signature-grid");

  const signatures = [
    {
      image: chickenImage,
      name: "Flame Grilled Chicken",
      detail: "Smoky house sauce, crisp fries, fresh herbs",
    },
    {
      image: pastaImage,
      name: "Creamy Garlic Pasta",
      detail: "Silky garlic cream, parmesan, garden herbs",
    },
    {
      image: dessertImage,
      name: "Golden Waffle Dessert",
      detail: "Ice cream, syrup, seasonal berries",
    },
  ];

  signatures.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("signature-card");
    article.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" />
      <div>
        <h3>${item.name}</h3>
        <p>${item.detail}</p>
      </div>
    `;

    signatureGrid.appendChild(article);
  });

  featureSection.appendChild(signatureGrid);

  const gallerySection = document.createElement("section");
  gallerySection.classList.add("gallery-section");
  gallerySection.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">From the kitchen</p>
      <h2>Fresh plates, familiar comfort.</h2>
    </div>
  `;

  const galleryGrid = document.createElement("div");
  galleryGrid.classList.add("gallery-grid");

  [
    { image: chickenImage, label: "Grill" },
    { image: pastaImage, label: "Pasta" },
    { image: burgerImage, label: "Burgers" },
    { image: dessertImage, label: "Dessert" },
  ].forEach((item) => {
    const galleryItem = document.createElement("figure");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `
      <img src="${item.image}" alt="${item.label} served at Bili-Bili Bistro" loading="lazy" decoding="async" />
      <figcaption>${item.label}</figcaption>
    `;

    galleryGrid.appendChild(galleryItem);
  });

  gallerySection.appendChild(galleryGrid);

  const visitSection = document.createElement("section");
  visitSection.classList.add("visit-banner");
  visitSection.innerHTML = `
    <div>
      <p class="eyebrow">Tonight at Bili-Bili</p>
      <h2>Dinner service starts at 18:00.</h2>
      <p>Come early for relaxed drinks, stay late for dessert.</p>
    </div>
    <div class="visit-details">
      <span><strong>Average mains</strong> R120 - R145</span>
      <span><strong>Dress</strong> Smart casual</span>
      <span><strong>Best for</strong> Groups, dates, family meals</span>
    </div>
  `;

  page.appendChild(heroSection);
  page.appendChild(storySection);
  page.appendChild(featureSection);
  page.appendChild(gallerySection);
  page.appendChild(visitSection);

  content.appendChild(page);
}

export default loadHome;
