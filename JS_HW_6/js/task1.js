function Account({ login, email }) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login} , Email:${this.email}`);
};
console.log(Account.prototype.getInfo); // function
const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

class Acc {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(`Login: ${this.login} , Email:${this.email}`);
  }
}
console.log(Acc.prototype);
const pinapple = new Acc({
  login: "pinapple",
  email: "pinapple@dog.woof",
});

pinapple.getInfo();

const vasia = new Acc({
  login: "Vasia",
  email: "Vasia@mail.com",
});
vasia.getInfo();
