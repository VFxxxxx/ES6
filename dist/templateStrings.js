"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello ", ""], ["Hello ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function sendEmail(to, from, subject, message) {
  console.log("\n    To: " + to + "\n    from: " + from + "\n    subject: " + subject + "\n    message: " + message + "\n    ");
}

sendEmail("test@mail.com", "testFrom@mail.com", "Hello", "How are you?");

function add(x, y) {
  console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)));
}

add(1, 2);
add(5, 6);

//теги
var name = 'Vladimir';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}