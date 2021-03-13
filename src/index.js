const hapjes = {
  vooraf: "lekker",
  tijdens: "kaasje",
  achteraf: "pate royal",
};

console.log(hapjes);

const drankjes = {
  ...hapjes,
  zoet: "fernandes",
  zuur: "moscow mule",
  achteraf: "chocje",
};

console.log(hapjes, drankjes);
