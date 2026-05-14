import heroImage from "./assets/images/hero.jpg";
import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";

function loadAbout() {
  const content = document.getElementById("content");

  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-section");

  const aboutCopy = document.createElement("div");
  aboutCopy.classList.add("about-copy");
  aboutCopy.innerHTML = `
    <p class="eyebrow">About us</p>
    <h2>Johannesburg comfort food with a generous table spirit.</h2>
    <p>
      Bili-Bili Bistro was created for everyday meals that still feel special:
      flame-grilled favourites, handmade-feeling pastas, bright desserts, and
      the kind of service that lets guests settle in.
    </p>
    <p>
      The kitchen keeps the menu familiar, bold, and seasonal, with plates made
      for family lunches, date nights, after-work dinners, and long weekend
      conversations.
    </p>
  `;

  const aboutImage = document.createElement("figure");
  aboutImage.classList.add("about-image");
  aboutImage.innerHTML = `
    <img src="${heroImage}" alt="Bili-Bili Bistro table with food and drinks" decoding="async" />
    <figcaption>Warm tables, polished service, and food made for sharing.</figcaption>
  `;

  const values = document.createElement("div");
  values.classList.add("about-values");

  [
    {
      title: "Flame and comfort",
      detail: "Grilled signatures, fresh pastas, loaded plates, and sweet finishes.",
    },
    {
      title: "Neighbourhood welcome",
      detail: "A relaxed room for walk-ins, celebrations, quick lunches, and late dinners.",
    },
    {
      title: "Made to linger",
      detail: "Generous portions, attentive service, and a pace that suits the table.",
    },
  ].forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("about-value-card");
    article.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    `;
    values.appendChild(article);
  });

  const kitchen = document.createElement("div");
  kitchen.classList.add("about-kitchen");
  kitchen.innerHTML = `
    <div>
      <p class="eyebrow">Our kitchen</p>
      <h2>Built around familiar dishes with a bistro finish.</h2>
      <p>
        The menu leans into smoky chicken, creamy pasta, burgers, waffles, and
        shareable starters, served with enough polish for dinner and enough ease
        for any weeknight.
      </p>
    </div>
    <div class="about-food-grid">
      <img src="${chickenImage}" alt="Flame grilled chicken" loading="lazy" decoding="async" />
      <img src="${pastaImage}" alt="Creamy pasta dish" loading="lazy" decoding="async" />
    </div>
  `;

  aboutSection.appendChild(aboutCopy);
  aboutSection.appendChild(aboutImage);
  aboutSection.appendChild(values);
  aboutSection.appendChild(kitchen);

  content.appendChild(aboutSection);
}

export default loadAbout;
