const formatString = function (string) {
  if (string.length && string.length < 40) {
    return string;
  } else if (string.length > 40) {
    let resString = string.substr(0, 40) + "...";
    return resString;
  } else {
    console.log("String is empty");
  }
};

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
