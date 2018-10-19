"use strict";

var array1 = ["c++", "Java", "c"];
var array2 = ["Alex", "Martin", "Melman"];

var arrayConcat = [].concat(array1, ["text"], array2);

console.log(arrayConcat);

function add(x, y, z) {
  console.log(x + y + x);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);