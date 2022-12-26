let total = 0;
let input = prompt("Enter number");

for (input; input !== null; input) {
  if (!isNaN(Number(input))) {
    total += Number(input);
  }
  input = prompt("Enter number");
}
alert(`Total sum = ${total}`);
