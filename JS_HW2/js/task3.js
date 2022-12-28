const findLongestWord = function (string) {
  const array = string.split(" ");
  let longestWord = array[0];
  for (let item of array) {
    if (longestWord.length < item.length) {
      longestWord = item;
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
