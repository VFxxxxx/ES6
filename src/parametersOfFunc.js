function greet(greeting, name) {
  console.log(`${greeting} ${name}`);
}

greet("Hi","Bill");

//greet("Hi"); Hi undefined
//greet(); undefined  undefined


//проверка параметров


function greet2(greeting = 'Hello', name = 'friend') {
  //так по дурацкому
  //var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  //var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';
  console.log(`${greeting} ${name}`);
}

greet();
greet2();
greet2("Hi");


function sum(...values) {
  console.log(values);
  let sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

sum(1,2,3,4,5,6,7);
