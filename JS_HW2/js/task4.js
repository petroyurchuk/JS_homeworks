const formatString = function (string) {
  let resString = string.substr(0, 40) + "...";
  if (string.length && string.length < 40) return string;
  if (string.length > 40) return resString;
  return "String is empty";
};
console.log(formatString(""));

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// повернеться форматований рядок
