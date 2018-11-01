let array1 = ["c++","Java","c"];
let array2 = ["Alex","Martin","Melman"];

let arrayConcat = [array1,"text",array2];
console.log(arrayConcat);

let arrayConcat = [...array1,"text",...array2];

console.log(arrayConcat);


function add(x,y,z) {
  console.log(x + y + x);
}

let numbers = [1,2,3];

add(...numbers);
