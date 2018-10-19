"use strict";

if (true) {
  var version = "es5";
  var version2 = "es6";
}

console.log(version);
//console.log(version2);

var buttons = document.querySelectorAll("button");

console.log(buttons);

var _loop = function _loop(i) {
  button = buttons[i];

  button.innerText = i;
  button.onclick = function (e) {
    console.log(i);
  };
};

for (var i = 0; i < buttons.length; i++) {
  var button;

  _loop(i);
}