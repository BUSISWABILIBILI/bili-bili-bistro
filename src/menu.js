import menuCategories from "./menuData.js";

const menuFilters = [
  { label: "All", value: "all" },
  { label: "Popular", value: "popular" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Chicken", value: "chicken" },
  { label: "Beef", value: "beef" },
  { label: "Spicy", value: "spicy" },
];

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

  const dietaryList = document.createElement("div");
  dietaryList.classList.add("dietary-tags");
  dietaryList.setAttribute("aria-label", "Dietary notes");

  item.dietary.forEach((tag) => {
    const dietaryTag = document.createElement("span");
    dietaryTag.textContent = tag;
    dietaryList.appendChild(dietaryTag);
  });

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  const imageCredit = document.createElement("p");
  imageCredit.classList.add("image-credit");
  imageCredit.innerHTML = item.credit;

  itemHeader.appendChild(itemName);
  itemHeader.appendChild(itemPrice);
  cardBody.appendChild(itemHeader);
  cardBody.appendChild(itemTag);
  cardBody.appendChild(dietaryList);
  cardBody.appendChild(itemDescription);
  cardBody.appendChild(imageCredit);
  card.appendChild(itemImage);
  card.appendChild(cardBody);

  return card;
}

function matchesFilter(item, activeFilter) {
  if (activeFilter === "all") return true;
  if (activeFilter === "popular") return item.popular;

  return item.dietary.some((tag) => tag.toLowerCase() === activeFilter);
}

function createFilterButton(filter, activeFilter, onSelect) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = filter.label;
  button.dataset.filter = filter.value;
  button.classList.toggle("active", filter.value === activeFilter);
  button.setAttribute("aria-pressed", String(filter.value === activeFilter));
  button.addEventListener("click", () => onSelect(filter.value));

  return button;
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

  const filterPanel = document.createElement("div");
  filterPanel.classList.add("menu-filters");

  const filterLabel = document.createElement("p");
  filterLabel.textContent = "Filter menu";

  const filterButtons = document.createElement("div");
  filterButtons.classList.add("menu-filter-buttons");

  const emptyState = document.createElement("p");
  emptyState.classList.add("menu-empty-state");
  emptyState.textContent = "No dishes match that filter right now.";

  let activeFilter = "all";

  function renderFilterButtons() {
    filterButtons.innerHTML = "";

    menuFilters.forEach((filter) => {
      filterButtons.appendChild(
        createFilterButton(filter, activeFilter, (nextFilter) => {
          activeFilter = nextFilter;
          renderFilterButtons();
          renderMenuList();
        }),
      );
    });
  }

  function renderMenuList() {
    menuList.innerHTML = "";

    const matchingCategories = menuCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => matchesFilter(item, activeFilter)),
      }))
      .filter((category) => category.items.length > 0);

    matchingCategories.forEach((category) => {
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

    if (matchingCategories.length === 0) {
      menuList.appendChild(emptyState);
    }
  }

  filterPanel.appendChild(filterLabel);
  filterPanel.appendChild(filterButtons);
  renderFilterButtons();
  renderMenuList();

  menuSection.appendChild(eyebrow);
  menuSection.appendChild(heading);
  menuSection.appendChild(intro);
  menuSection.appendChild(menuMeta);
  menuSection.appendChild(filterPanel);
  menuSection.appendChild(menuList);

  content.appendChild(menuSection);
}

export default loadMenu;
