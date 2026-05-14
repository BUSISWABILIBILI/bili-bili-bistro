import chickenImage from "./assets/images/chicken.jpg";
import pastaImage from "./assets/images/pasta.jpg";
import burgerImage from "./assets/images/burger.jpg";
import dessertImage from "./assets/images/dessert.jpg";
import chickenBiteImage from "./assets/images/chicken-bite.jpg";
import garlicBreadImage from "./assets/images/garlic-bread.jpg";
import friesImage from "./assets/images/fries.jpg";
import periperiChickenImage from "./assets/images/peri-peri-chicken.jpg";
import smokyChickenImage from "./assets/images/smoky-chicken.jpg";
import pastaVerdeImage from "./assets/images/pasta-verde.jpg";
import doubleBurgerImage from "./assets/images/double-burger.jpg";
import chickenAlfredoImage from "./assets/images/chicken-alfredo.jpg";
import burgerStackImage from "./assets/images/burger-stack.jpg";
import berryWaffleImage from "./assets/images/berry-waffle.jpg";
import chocolateWaffleImage from "./assets/images/chocolate-waffle.jpg";

const credits = {
  chicken:
    'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on Unsplash',
  pasta:
    'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on Unsplash',
  burger:
    'Photo by <a href="https://unsplash.com/@amir_v_ali" target="_blank">amirali mirhashemian</a> on Unsplash',
  dessert:
    'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on Unsplash',
  chickenBite:
    'Photo by <a href="https://unsplash.com/@joestudios" target="_blank">joe boshra</a> on Unsplash',
  garlicBread:
    'Photo by <a href="https://unsplash.com/@waldemarbrandt67w" target="_blank">Waldermar Brandt</a> on Unsplash',
  fries:
    'Photo by <a href="https://unsplash.com/@nahimaaparicio" target="_blank">Nahima Aparicio</a> on Unsplash',
  periperiChicken:
    'Photo by <a href="https://unsplash.com/@le_y0u" target="_blank">You Le</a> on Unsplash',
  smokyChicken:
    'Photo by <a href="https://unsplash.com/@17allansfilms" target="_blank">Allen Lainez</a> on Unsplash',
  pastaVerde:
    'Photo by <a href="https://unsplash.com/@nerfee" target="_blank">Nerfee Mirandilla</a> on Unsplash',
  doubleBurger:
    'Photo by <a href="https://unsplash.com/@stumoffatimages" target="_blank">Stu Moffat</a> on Unsplash',
  chickenAlfredo:
    'Photo by <a href="https://unsplash.com/@le_y0u" target="_blank">You Le</a> on Unsplash',
  burgerStack:
    'Photo by <a href="https://unsplash.com/@wondermario__" target="_blank">Mario</a> on Unsplash',
  berryWaffle:
    'Photo by <a href="https://unsplash.com/@good_citizen" target="_blank">Humphrey M</a> on Unsplash',
  chocolateWaffle:
    'Photo by <a href="https://unsplash.com/@dino_trexx" target="_blank">Fatemeh Rz</a> on Unsplash',
};

const menuCategories = [
  {
    title: "Starters",
    note: "Small plates for the table",
    items: [
      {
        name: "Bili-Bili Chicken Bites",
        price: "R78",
        image: chickenBiteImage,
        tag: "Share",
        description:
          "Crisp chicken bites tossed in house spice with lemon aioli.",
        credit: credits.chickenBite,
      },
      {
        name: "Garlic Herb Flatbread",
        price: "R65",
        image: garlicBreadImage,
        tag: "Vegetarian",
        description:
          "Warm flatbread with garlic butter, herbs, and parmesan dust.",
        credit: credits.garlicBread,
      },
      {
        name: "Loaded Bistro Fries",
        price: "R72",
        image: friesImage,
        tag: "Popular",
        description:
          "Golden fries topped with bistro sauce, cheese, and spring onion.",
        credit: credits.fries,
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
        image: periperiChickenImage,
        tag: "Spicy",
        description:
          "Charred chicken brushed with peri-peri glaze, served with slaw and fries.",
        credit: credits.periperiChicken,
      },
      {
        name: "Smoky Half Chicken",
        price: "R165",
        image: smokyChickenImage,
        tag: "Chef pick",
        description:
          "Slow-marinated half chicken with charred lemon and herb butter.",
        credit: credits.smokyChicken,
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
        image: pastaVerdeImage,
        tag: "Fresh",
        description:
          "Herbed pasta with garlic cream, seasonal greens, and parmesan.",
        credit: credits.pastaVerde,
      },
      {
        name: "Double Bistro Burger",
        price: "R165",
        image: doubleBurgerImage,
        tag: "Hearty",
        description:
          "Two beef patties, cheddar, pickles, caramelized onions, and house sauce.",
        credit: credits.doubleBurger,
      },
      {
        name: "Chicken Alfredo Bowl",
        price: "R148",
        image: chickenAlfredoImage,
        tag: "Creamy",
        description:
          "Garlic cream pasta topped with grilled chicken and cracked black pepper.",
        credit: credits.chickenAlfredo,
      },
      {
        name: "Bili-Bili Burger Stack",
        price: "R150",
        image: burgerStackImage,
        tag: "New",
        description:
          "Beef burger with smoky sauce, cheese, tomato relish, and crisp lettuce.",
        credit: credits.burgerStack,
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
        image: berryWaffleImage,
        tag: "Favourite",
        description:
          "Crisp waffle layered with vanilla ice cream, syrup, and berries.",
        credit: credits.berryWaffle,
      },
      {
        name: "Chocolate Waffle Sundae",
        price: "R98",
        image: chocolateWaffleImage,
        tag: "Indulgent",
        description:
          "Warm waffle, chocolate sauce, ice cream, and toasted crumble.",
        credit: credits.chocolateWaffle,
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
