import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import burgerImage from "./assets/images/burger.jpg";
import dessertImage from "./assets/images/dessert.jpg";

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
      image: chickenImage,
      description:
        "Tender grilled chicken served with spicy house sauce and golden fries.",
      credit:
        'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on Unsplash',
    },
    {
      name: "Creamy Garlic Pasta",
      price: "R120",
      image: pastaImage,
      description:
        "Pasta tossed in a rich garlic cream sauce with fresh herbs.",
      credit:
        'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on Unsplash',
    },
    {
      name: "Heritage Beef Burger",
      price: "R135",
      image: burgerImage,
      description:
        "Juicy beef burger with caramelized onions, cheese, and bistro sauce.",
      credit:
        'Photo by <a href="https://unsplash.com/@amir_v_ali" target="_blank">amirali mirhashemian</a> on Unsplash',
    },
    {
      name: "Golden Waffle Dessert",
      price: "R85",
      image: dessertImage,
      description:
        "Warm waffle topped with ice cream, syrup, and seasonal berries.",
      credit:
        'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on Unsplash',
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;
    itemImage.classList.add("menu-image");

    card.appendChild(itemImage);

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
