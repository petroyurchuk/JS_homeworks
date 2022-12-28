const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
const stringArray = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numberArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(stringArray);
logItems(numberArray);
