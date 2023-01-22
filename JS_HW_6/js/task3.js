//==================================================ES6

class Storage {
  constructor(array) {
    this.array = array;
  }
  getItems() {
    return this.array;
  }
  addItem(item) {
    return this.array.push(item);
  }
  removeItem(item) {
    if (this.array.includes(item)) {
      return this.array.splice(this.array.indexOf(item), 1);
    }
    return this.array;
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(storage.array); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.array); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.array); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

//==================================================ES5
console.log("<<<<<<<<ES5>>>>>>>>> ");
function StorageS(array) {
  this.array = array;
}
StorageS.prototype.getItems = function () {
  return this.array;
};
StorageS.prototype.addItem = function (item) {
  return this.array.push(item);
};
StorageS.prototype.removeItem = function (item) {
  if (this.array.includes(item)) {
    return this.array.splice(this.array.indexOf(item), 1);
  }
  return this.array;
};
const storageS = new StorageS([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const itemsS = storageS.getItems();
console.table(storageS.array); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storageS.addItem("Дроїд");
console.table(storageS.array); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storageS.removeItem("Пролонгер");
console.table(storageS.array); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
