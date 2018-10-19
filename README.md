# ES6

npm init -y
npm install babel-cli babel-core babel-preset-es2015 --save-dev

babel-cli  чтобы можно в командной строке исп
основное ядро
транспиляция es6


Папки
src (sourse)  источник - исходный код
dist (distribution)  конечный код
index.html

packag.json
"scripts": {
"build": "babel src -d dist --presets es2015",
"watch": "babel src -d dist --presets es2015 -w"
},


npm run build
npm run watch


let  +
-только внутри блока
-hosting (нельзя исп. до объявления)

spread operator оператор разворота
разворачивает элементы из массива
соединять массивы
или передавать массивы в аргументы функции
add(...numbers);

Шаблонные строки template strings
легче соединять строки и переменные `hello ${name}

параметры функции
default (основные параметры)
rest (оставшиеся параметры)
