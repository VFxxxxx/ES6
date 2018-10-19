"use strict";

function greet(greeting, name) {
  console.log(greeting + " " + name);
}

greet("Hi", "Bill");

//greet("Hi"); Hi undefined
//greet(); undefined  undefined


//проверка параметров


function greet2() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

  //так по дурацкому
  //var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  //var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';
  console.log(greeting + " " + name);
}

greet();
greet2();
greet2("Hi");

function sum() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values);
  var sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

sum(1, 2, 3, 4, 5, 6, 7);