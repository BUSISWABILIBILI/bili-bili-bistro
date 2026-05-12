import heroImage from "./assets/images/hero.jpg";

function loadHome() {
  const content = document.getElementById("content");

  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const leftContent = document.createElement("div");
  leftContent.classList.add("hero-text");

  const heading = document.createElement("h2");
  heading.textContent = "Bold Flavours. Elegant Dining.";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Welcome to Bili-Bili Bistro, where modern cuisine meets unforgettable experiences. Enjoy handcrafted dishes, premium ingredients, and warm hospitality.";

  const button = document.createElement("button");
  button.textContent = "Explore Menu";
  button.classList.add("hero-btn");

  leftContent.appendChild(heading);
  leftContent.appendChild(paragraph);
  leftContent.appendChild(button);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("hero-image");

  const image = document.createElement("img");

  image.src = heroImage;

  image.alt = "Table set with delicious food and drinks";

  imageContainer.appendChild(image);

  const credit = document.createElement("p");
  credit.classList.add("image-credit");
  credit.innerHTML =
    'Photo by <a href="https://unsplash.com/photos/cooked-food-on-stainless-steel-plate-XgCI2ExTr9I" target="_blank">Emma Houghton</a> on Unsplash';

  imageContainer.appendChild(credit);

  heroSection.appendChild(leftContent);
  heroSection.appendChild(imageContainer);

  content.appendChild(heroSection);
}

export default loadHome;
