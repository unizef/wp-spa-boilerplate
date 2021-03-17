import "./styles/index.scss";

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
