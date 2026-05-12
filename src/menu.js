function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const menuItems = [
    {
      name: "Bili-Bili Flame Grilled Chicken",
      price: "R145",
      description:
        "Tender grilled chicken served with spicy house sauce and golden fries.",
    },
    {
      name: "Creamy Garlic Pasta",
      price: "R120",
      description:
        "Pasta tossed in a rich garlic cream sauce with fresh herbs.",
    },
    {
      name: "Heritage Beef Burger",
      price: "R135",
      description:
        "Juicy beef burger with caramelized onions, cheese, and bistro sauce.",
    },
    {
      name: "Golden Waffle Dessert",
      price: "R85",
      description:
        "Warm waffle topped with ice cream, syrup, and seasonal berries.",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    card.appendChild(itemName);
    card.appendChild(itemPrice);
    card.appendChild(itemDescription);

    menuGrid.appendChild(card);
  });

  menuSection.appendChild(heading);
  menuSection.appendChild(menuGrid);

  content.appendChild(menuSection);
}

export default loadMenu;
