let input = prompt("Enter number");
const numbers = [];
let total = 0;

for (input; input !== null; input) {
  if (Number(input)) {
    numbers.push(Number(input));
  } else {
    alert(`It's not a number,try again`);
  }
  input = prompt("Enter number");
}
if (numbers.length) {
  total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}
alert(`Total sum = ${total}`);
