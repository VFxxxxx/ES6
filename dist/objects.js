"use strict";

var firstName = "Bill",
    lastName = "Geits",
    email = "test@mail.ru";

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayhello: function sayhello() {
    console.log("Hi my name is " + this.firstName);
  },

  get fullname() {
    return this.firstName + " " + this.lastName;
  },
  set fullname(value) {
    this.firstName = value;
  }
};

/* в ES6 можно
let person = {
  firstName,
  lastName,
  email
};
*/
console.log(person);
person.sayhello();

/*
let property = 'firstName';
person[property]; // person['firstName']


person = {
  [property]: "Bill"
};
*/
function createCar(property, value) {
  var car = {};

  car[property] = value;

  return car;
}

console.log(createCar('vin', 1));

/*get set ES5

Object.defineProperty(person,'fullname',{
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(value) {
    this.firstName = value;
  },
});
*/