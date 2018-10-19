let browsers = ['Chroome','Farefox','Sarafi','Opera'];

//перебирает ключи
for (let browser in browsers) {
  console.log(browser);
}

for (let browser in browsers) {
  console.log(browsers[browser]);
}


//перебирает значения
for (let browser of browsers) {
  console.log(browser);
}
