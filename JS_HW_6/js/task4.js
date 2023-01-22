//==================================================ES6

class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    const array = this._value.split("");
    array.unshift(str);
    this._value = array.join("");
    return this._value;
  }
  pad(str) {
    this._value += str;
    const array = this._value.split("");
    array.unshift(str);
    this._value = array.join("");
    return this._value;
  }
}

const builder = new StringBuilder(".");
console.log("ES6");
builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

//==================================================ES5
function StringBuilderS(_value) {
  this._value = _value;
}
StringBuilderS.prototype.getValue = function () {
  return this._value;
};
StringBuilderS.prototype.append = function (str) {
  this._value += str;
};
StringBuilderS.prototype.prepend = function (str) {
  const array = this._value.split("");
  array.unshift(str);
  this._value = array.join("");
  return this._value;
};
StringBuilderS.prototype.pad = function (str) {
  this._value += str;
  const array = this._value.split("");
  array.unshift(str);
  this._value = array.join("");
  return this._value;
};
const builderS = new StringBuilderS(".");

console.log("");
console.log(`ES5`);
builderS.append("^");
console.log(builderS._value); // '.^'

builderS.prepend("^");
console.log(builderS._value); // '^.^'

builderS.pad("=");
console.log(builderS._value); // '=^.^='
