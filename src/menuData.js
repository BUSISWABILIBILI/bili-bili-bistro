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
    'Photo by <a href="https://unsplash.com/@omarhakeem" target="_blank">Omar Hakeem</a> on <a href="https://unsplash.com/">Unsplash</a>',
  pasta:
    'Photo by <a href="https://unsplash.com/photos/pasta-dish-on-white-ceramic-bowl-wTBGTwHlf0c" target="_blank">Sama Hosseini</a> on <a href="https://unsplash.com/">Unsplash</a>',
  burger:
    'Photo by <a href="https://unsplash.com/@amir_v_ali" target="_blank">amirali mirhashemian</a> on <a href="https://unsplash.com/">Unsplash</a>',
  dessert:
    'Photo by <a href="https://unsplash.com/@maryamjahanmehr" target="_blank">maryam jahanmehr</a> on <a href="https://unsplash.com/">Unsplash</a>',
  chickenBite:
    'Photo by <a href="https://unsplash.com/@joestudios" target="_blank">joe boshra</a> on <a href="https://unsplash.com/">Unsplash</a>',
  garlicBread:
    'Photo by <a href="https://unsplash.com/@waldemarbrandt67w" target="_blank">Waldermar Brandt</a> on <a href="https://unsplash.com/">Unsplash</a>',
  fries:
    'Photo by <a href="https://unsplash.com/@nahimaaparicio" target="_blank">Nahima Aparicio</a> on <a href="https://unsplash.com/">Unsplash</a>',
  periperiChicken:
    'Photo by <a href="https://unsplash.com/@le_y0u" target="_blank">You Le</a> on <a href="https://unsplash.com/">Unsplash</a>',
  smokyChicken:
    'Photo by <a href="https://unsplash.com/@17allansfilms" target="_blank">Allen Lainez</a> on <a href="https://unsplash.com/">Unsplash</a>',
  pastaVerde:
    'Photo by <a href="https://unsplash.com/@nerfee" target="_blank">Nerfee Mirandilla</a> on <a href="https://unsplash.com/">Unsplash</a>',
  doubleBurger:
    'Photo by <a href="https://unsplash.com/@stumoffatimages" target="_blank">Stu Moffat</a> on <a href="https://unsplash.com/">Unsplash</a>',
  chickenAlfredo:
    'Photo by <a href="https://unsplash.com/@le_y0u" target="_blank">You Le</a> on <a href="https://unsplash.com/">Unsplash</a>',
  burgerStack:
    'Photo by <a href="https://unsplash.com/@wondermario__" target="_blank">Mario</a> on <a href="https://unsplash.com/">Unsplash</a>',
  berryWaffle:
    'Photo by <a href="https://unsplash.com/@good_citizen" target="_blank">Humphrey M</a> on <a href="https://unsplash.com/">Unsplash</a>',
  chocolateWaffle:
    'Photo by <a href="https://unsplash.com/@dino_trexx" target="_blank">Fatemeh Rz</a> on <a href="https://unsplash.com/">Unsplash</a>',
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
        dietary: ["Chicken", "Contains egg"],
        popular: true,
        description:
          "Crisp chicken bites tossed in house spice with lemon aioli.",
        credit: credits.chickenBite,
      },
      {
        name: "Garlic Herb Flatbread",
        price: "R65",
        image: garlicBreadImage,
        tag: "Vegetarian",
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: false,
        description:
          "Warm flatbread with garlic butter, herbs, and parmesan dust.",
        credit: credits.garlicBread,
      },
      {
        name: "Loaded Bistro Fries",
        price: "R72",
        image: friesImage,
        tag: "Popular",
        dietary: ["Vegetarian", "Contains dairy"],
        popular: true,
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
        dietary: ["Chicken", "Spicy"],
        popular: true,
        description:
          "Tender grilled chicken served with spicy house sauce and golden fries.",
        credit: credits.chicken,
      },
      {
        name: "Peri-Peri Chicken Plate",
        price: "R155",
        image: periperiChickenImage,
        tag: "Spicy",
        dietary: ["Chicken", "Spicy"],
        popular: true,
        description:
          "Charred chicken brushed with peri-peri glaze, served with slaw and fries.",
        credit: credits.periperiChicken,
      },
      {
        name: "Smoky Half Chicken",
        price: "R165",
        image: smokyChickenImage,
        tag: "Chef pick",
        dietary: ["Chicken"],
        popular: false,
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
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: true,
        description:
          "Pasta tossed in a rich garlic cream sauce with fresh herbs.",
        credit: credits.pasta,
      },
      {
        name: "Heritage Beef Burger",
        price: "R135",
        image: burgerImage,
        tag: "Popular",
        dietary: ["Beef", "Contains dairy", "Contains gluten"],
        popular: true,
        description:
          "Juicy beef burger with caramelized onions, cheese, and bistro sauce.",
        credit: credits.burger,
      },
      {
        name: "Bistro Pasta Verde",
        price: "R125",
        image: pastaVerdeImage,
        tag: "Fresh",
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: false,
        description:
          "Herbed pasta with garlic cream, seasonal greens, and parmesan.",
        credit: credits.pastaVerde,
      },
      {
        name: "Double Bistro Burger",
        price: "R165",
        image: doubleBurgerImage,
        tag: "Hearty",
        dietary: ["Beef", "Contains dairy", "Contains gluten"],
        popular: false,
        description:
          "Two beef patties, cheddar, pickles, caramelized onions, and house sauce.",
        credit: credits.doubleBurger,
      },
      {
        name: "Chicken Alfredo Bowl",
        price: "R148",
        image: chickenAlfredoImage,
        tag: "Creamy",
        dietary: ["Chicken", "Contains dairy", "Contains gluten"],
        popular: false,
        description:
          "Garlic cream pasta topped with grilled chicken and cracked black pepper.",
        credit: credits.chickenAlfredo,
      },
      {
        name: "Bili-Bili Burger Stack",
        price: "R150",
        image: burgerStackImage,
        tag: "New",
        dietary: ["Beef", "Contains dairy", "Contains gluten"],
        popular: false,
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
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: true,
        description:
          "Warm waffle topped with ice cream, syrup, and seasonal berries.",
        credit: credits.dessert,
      },
      {
        name: "Berry Ice Cream Waffle",
        price: "R95",
        image: berryWaffleImage,
        tag: "Favourite",
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: true,
        description:
          "Crisp waffle layered with vanilla ice cream, syrup, and berries.",
        credit: credits.berryWaffle,
      },
      {
        name: "Chocolate Waffle Sundae",
        price: "R98",
        image: chocolateWaffleImage,
        tag: "Indulgent",
        dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
        popular: false,
        description:
          "Warm waffle, chocolate sauce, ice cream, and toasted crumble.",
        credit: credits.chocolateWaffle,
      },
    ],
  },
];

export default menuCategories;
