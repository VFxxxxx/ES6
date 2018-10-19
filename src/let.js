if (true) {
  var version = "es5";
  let version2 = "es6";
}

console.log(version);
//console.log(version2);

var buttons = document.querySelectorAll("button");

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;
  button.onclick = function (e) {
    console.log(i);
  };
}
