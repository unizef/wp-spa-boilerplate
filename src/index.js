import "./styles/index.scss";
import sword from "./images/swc-sword.png";
import swordSvg from "./images/sword.svg";

// Image example
const png = document.querySelector(".png img");
png.setAttribute("src", sword);

const svg = document.querySelector(".svg img");
svg.setAttribute("src", swordSvg);

// JS example
const fruit = {
  mango: 5,
  jackfruit: 2,
  banana: 10,
};

console.log(fruit);

const groceries = {
  ...fruit,
  "ficus lyrata": 1,
  facewash: 2,
  mirror: 1,
};

console.log(groceries);
