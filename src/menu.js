import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import burgerImage from "./assets/images/burger.jpg";
import dessertImage from "./assets/images/dessert.jpg";

function loadMenu() {
  const content = document.getElementById("content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const eyebrow = document.createElement("p");
  eyebrow.classList.add("eyebrow");
  eyebrow.textContent = "House favourites";

  const heading = document.createElement("h2");
  heading.textContent = "Seasonal bistro favourites.";

  const intro = document.createElement("p");
  intro.classList.add("section-intro");
  intro.textContent =
    "A focused selection of grilled signatures, comfort plates, and desserts, prepared fresh for lunch and dinner service.";

  const menuMeta = document.createElement("div");
  menuMeta.classList.add("menu-meta");
  menuMeta.innerHTML = `
    <span><strong>Lunch</strong> 10:00 - 16:00</span>
    <span><strong>Dinner</strong> 18:00 - 22:00</span>
    <span><strong>Kitchen note</strong> Ask about today's chef special</span>
  `;

  const menuCategories = [
    {
      title: "Grill",
      items: [
    {
      name: "Bili-Bili Flame Grilled Chicken",
      price: "R145",
      image: chickenImage,
      tag: "Signature",
      description:
        "Tender grilled chicken served with spicy house sauce and golden fries.",
      credit:
        'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on Unsplash',
    },
    {
      name: "Peri-Peri Chicken Plate",
      price: "R155",
      image: chickenImage,
      tag: "Spicy",
      description:
        "Charred chicken brushed with peri-peri glaze, served with slaw and fries.",
      credit:
        'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on Unsplash',
    },
      ],
    },
    {
      title: "Comfort",
      items: [
        {
      name: "Creamy Garlic Pasta",
      price: "R120",
      image: pastaImage,
      tag: "Vegetarian",
      description:
        "Pasta tossed in a rich garlic cream sauce with fresh herbs.",
      credit:
        'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on Unsplash',
    },
    {
      name: "Heritage Beef Burger",
      price: "R135",
      image: burgerImage,
      tag: "Popular",
      description:
        "Juicy beef burger with caramelized onions, cheese, and bistro sauce.",
      credit:
        'Photo by <a href="https://unsplash.com/@amir_v_ali" target="_blank">amirali mirhashemian</a> on Unsplash',
    },
    {
      name: "Bistro Pasta Verde",
      price: "R125",
      image: pastaImage,
      tag: "Fresh",
      description:
        "Herbed pasta with garlic cream, seasonal greens, and parmesan.",
      credit:
        'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on Unsplash',
    },
      ],
    },
    {
      title: "Dessert",
      items: [
        {
      name: "Golden Waffle Dessert",
      price: "R85",
      image: dessertImage,
      tag: "Sweet",
      description:
        "Warm waffle topped with ice cream, syrup, and seasonal berries.",
      credit:
        'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on Unsplash',
    },
    {
      name: "Berry Ice Cream Waffle",
      price: "R95",
      image: dessertImage,
      tag: "Favourite",
      description:
        "Crisp waffle layered with vanilla ice cream, syrup, and berries.",
      credit:
        'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on Unsplash',
    },
      ],
    },
  ];

  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");

  menuCategories.forEach((category) => {
    const categorySection = document.createElement("section");
    categorySection.classList.add("menu-category");

    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category.title;

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    category.items.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("menu-card");

      const itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemImage.alt = item.name;
      itemImage.classList.add("menu-image");

      card.appendChild(itemImage);

      const cardBody = document.createElement("div");
      cardBody.classList.add("menu-card-body");

      const itemHeader = document.createElement("div");
      itemHeader.classList.add("menu-card-header");

      const itemName = document.createElement("h4");
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.textContent = item.price;
      itemPrice.classList.add("price");

      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);

      const itemTag = document.createElement("p");
      itemTag.classList.add("menu-tag");
      itemTag.textContent = item.tag;

      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;

      cardBody.appendChild(itemHeader);
      cardBody.appendChild(itemTag);
      cardBody.appendChild(itemDescription);

      const imageCredit = document.createElement("p");
      imageCredit.classList.add("image-credit");
      imageCredit.innerHTML = item.credit;

      cardBody.appendChild(imageCredit);
      card.appendChild(cardBody);

      menuGrid.appendChild(card);
    });

    categorySection.appendChild(categoryHeading);
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
