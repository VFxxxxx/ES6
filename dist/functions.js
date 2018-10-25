"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var add = function add(x, y) {
  return x + y;
};

var square = function square(x) {
  return x * x;
};

console.log(typeof add === "undefined" ? "undefined" : _typeof(add));
console.log(add(1, 3));