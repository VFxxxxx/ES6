"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaulTitle();

    _classCallCheck(this, Task);

    /*
    свойсва указываются в конструкторе
    */
    this.title = title;
    this.done = false;
    Task.cout += 1;
    console.log("Создание задачи");
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0437\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u0435\u043D\u0435\u043D\u0430");
    }
  }], [{
    key: "getDefaulTitle",
    value: function getDefaulTitle() {
      return "Задача";
    }
  }]);

  return Task;
}();

Task.count = 0;

var task = new Task("Убрать комнату");
var task2 = new Task("Купить продукты");
var task3 = new Task();

console.log(typeof Task === "undefined" ? "undefined" : _typeof(Task));
console.log(task instanceof Task);

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

task2.complete();