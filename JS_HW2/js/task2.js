const calculateEngravingPrice = function (message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
};

const message = "Proin sociis natoque et magnis parturient montes mus";
const secondMessage = "Donec orci lectus aliquam est magnis";

console.log(calculateEngravingPrice(message, 10)); //80
console.log(calculateEngravingPrice(message, 20)); //160
console.log(calculateEngravingPrice(secondMessage, 40)); //240
console.log(calculateEngravingPrice(secondMessage, 20)); //120
