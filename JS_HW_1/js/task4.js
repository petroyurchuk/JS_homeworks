const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let number = Number(prompt("Введіть кількість дроїдів, яку ви хочете купити"));

if (number === 0) {
  console.log("Скасовано користувачем!");
} else if (number > 0) {
  totalPrice = number * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    console.log(
      `Ви купили ${number} дроїдів, на рахунку залишилося ${
        credits - totalPrice
      } кредитів.`
    );
  }
}
