import menuCategories from "./menuData.js";

function createMenuCard(item) {
  const card = document.createElement("article");
  card.classList.add("menu-card");

  const itemImage = document.createElement("img");
  itemImage.src = item.image;
  itemImage.alt = item.name;
  itemImage.loading = "lazy";
  itemImage.decoding = "async";
  itemImage.classList.add("menu-image");

  const cardBody = document.createElement("div");
  cardBody.classList.add("menu-card-body");

  const itemHeader = document.createElement("div");
  itemHeader.classList.add("menu-card-header");

  const itemName = document.createElement("h4");
  itemName.textContent = item.name;

  const itemPrice = document.createElement("span");
  itemPrice.textContent = item.price;
  itemPrice.classList.add("price");

  const itemTag = document.createElement("p");
  itemTag.classList.add("menu-tag");
  itemTag.textContent = item.tag;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");
  imageCredit.innerHTML = item.credit;

  itemHeader.appendChild(itemName);
  itemHeader.appendChild(itemPrice);
  cardBody.appendChild(itemHeader);
  cardBody.appendChild(itemTag);
  cardBody.appendChild(itemDescription);
  cardBody.appendChild(imageCredit);
  card.appendChild(itemImage);
  card.appendChild(cardBody);

  return card;
}

function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "House menu";

  const heading = document.createElement("h2");
  heading.textContent = "Seasonal bistro favourites.";

  const intro = document.createElement("p");
  intro.classList.add("section-intro");
  intro.textContent =
    "A fuller selection of starters, grilled signatures, comfort plates, and desserts prepared fresh for lunch and dinner service.";

  const menuMeta = document.createElement("div");
  menuMeta.classList.add("menu-meta");
  menuMeta.innerHTML = `
    <span><strong>Lunch</strong> 10:00 - 16:00</span>
    <span><strong>Dinner</strong> 18:00 - 22:00</span>
    <span><strong>Kitchen note</strong> Ask about today's chef special</span>
  `;

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuCategories.forEach((category) => {
    const categorySection = document.createElement("section");
    categorySection.classList.add("menu-category");

    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("menu-category-header");

    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category.title;

    const categoryNote = document.createElement("p");
    categoryNote.textContent = category.note;

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    category.items.forEach((item) => {
      menuGrid.appendChild(createMenuCard(item));
    });

    categoryHeader.appendChild(categoryHeading);
    categoryHeader.appendChild(categoryNote);
    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(menuGrid);
    menuList.appendChild(categorySection);
  });

  menuSection.appendChild(eyebrow);
  menuSection.appendChild(heading);
  menuSection.appendChild(intro);
  menuSection.appendChild(menuMeta);
  menuSection.appendChild(menuList);

  content.appendChild(menuSection);
}

export default loadMenu;
