import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import burgerImage from "./assets/images/burger.jpg";
import dessertImage from "./assets/images/dessert.jpg";

const credits = {
  chicken:
    'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on Unsplash',
  pasta:
    'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on Unsplash',
  burger:
    'Photo by <a href="https://unsplash.com/@amir_v_ali" target="_blank">amirali mirhashemian</a> on Unsplash',
  dessert:
    'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on Unsplash',
};

const menuCategories = [
  {
    title: "Starters",
    note: "Small plates for the table",
    items: [
      {
        name: "Bili-Bili Chicken Bites",
        price: "R78",
        image: chickenImage,
        tag: "Share",
        description:
          "Crisp chicken bites tossed in house spice with lemon aioli.",
        credit: credits.chicken,
      },
      {
        name: "Garlic Herb Flatbread",
        price: "R65",
        image: pastaImage,
        tag: "Vegetarian",
        description:
          "Warm flatbread with garlic butter, herbs, and parmesan dust.",
        credit: credits.pasta,
      },
      {
        name: "Loaded Bistro Fries",
        price: "R72",
        image: burgerImage,
        tag: "Popular",
        description:
          "Golden fries topped with bistro sauce, cheese, and spring onion.",
        credit: credits.burger,
      },
    ],
  },
  {
    title: "From the Grill",
    note: "Flame-grilled signatures",
    items: [
      {
        name: "Bili-Bili Flame Grilled Chicken",
        price: "R145",
        image: chickenImage,
        tag: "Signature",
        description:
          "Tender grilled chicken served with spicy house sauce and golden fries.",
        credit: credits.chicken,
      },
      {
        name: "Peri-Peri Chicken Plate",
        price: "R155",
        image: chickenImage,
        tag: "Spicy",
        description:
          "Charred chicken brushed with peri-peri glaze, served with slaw and fries.",
        credit: credits.chicken,
      },
      {
        name: "Smoky Half Chicken",
        price: "R165",
        image: chickenImage,
        tag: "Chef pick",
        description:
          "Slow-marinated half chicken with charred lemon and herb butter.",
        credit: credits.chicken,
      },
    ],
  },
  {
    title: "Bistro Comforts",
    note: "Pasta, burgers, and generous mains",
    items: [
      {
        name: "Creamy Garlic Pasta",
        price: "R120",
        image: pastaImage,
        tag: "Vegetarian",
        description:
          "Pasta tossed in a rich garlic cream sauce with fresh herbs.",
        credit: credits.pasta,
      },
      {
        name: "Heritage Beef Burger",
        price: "R135",
        image: burgerImage,
        tag: "Popular",
        description:
          "Juicy beef burger with caramelized onions, cheese, and bistro sauce.",
        credit: credits.burger,
      },
      {
        name: "Bistro Pasta Verde",
        price: "R125",
        image: pastaImage,
        tag: "Fresh",
        description:
          "Herbed pasta with garlic cream, seasonal greens, and parmesan.",
        credit: credits.pasta,
      },
      {
        name: "Double Bistro Burger",
        price: "R165",
        image: burgerImage,
        tag: "Hearty",
        description:
          "Two beef patties, cheddar, pickles, caramelized onions, and house sauce.",
        credit: credits.burger,
      },
      {
        name: "Chicken Alfredo Bowl",
        price: "R148",
        image: pastaImage,
        tag: "Creamy",
        description:
          "Garlic cream pasta topped with grilled chicken and cracked black pepper.",
        credit: credits.pasta,
      },
      {
        name: "Bili-Bili Burger Stack",
        price: "R150",
        image: burgerImage,
        tag: "New",
        description:
          "Beef burger with smoky sauce, cheese, tomato relish, and crisp lettuce.",
        credit: credits.burger,
      },
    ],
  },
  {
    title: "Desserts",
    note: "Sweet finishes",
    items: [
      {
        name: "Golden Waffle Dessert",
        price: "R85",
        image: dessertImage,
        tag: "Sweet",
        description:
          "Warm waffle topped with ice cream, syrup, and seasonal berries.",
        credit: credits.dessert,
      },
      {
        name: "Berry Ice Cream Waffle",
        price: "R95",
        image: dessertImage,
        tag: "Favourite",
        description:
          "Crisp waffle layered with vanilla ice cream, syrup, and berries.",
        credit: credits.dessert,
      },
      {
        name: "Chocolate Waffle Sundae",
        price: "R98",
        image: dessertImage,
        tag: "Indulgent",
        description:
          "Warm waffle, chocolate sauce, ice cream, and toasted crumble.",
        credit: credits.dessert,
      },
    ],
  },
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
