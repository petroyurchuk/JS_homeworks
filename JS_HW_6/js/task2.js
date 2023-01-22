class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

///////////////////////////////////////////////////ES5
console.log("");
function Users({ name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
}
Users.prototype.getInfo = function () {
  console.log(
    `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  );
};
const mangoS = new Users({
  name: "Mango",
  age: 2,
  followers: 20,
});

mangoS.getInfo(); // User Mango is 2 years old and has 20 followers

const polyS = new Users({
  name: "Poly",
  age: 3,
  followers: 17,
});
polyS.getInfo(); // User Poly is 3 years old and has 17 followers
