class Task {
  constructor(title = Task.getDefaulTitle()) {
    /*
    свойсва указываются в конструкторе
    */
    this.title = title;
    this.done = false;
    Task.cout += 1;
    console.log("Создание задачи");
  }

  complete() {
    this.done = true;
    console.log(`задача "${this.title}" выполенена`);
  }

  static getDefaulTitle() {
    return "Задача";
  }
}

Task.count = 0;

let task = new Task("Убрать комнату");
let task2 = new Task("Купить продукты");
let task3 = new Task();


console.log(typeof Task);
console.log(task instanceof Task);

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

task2.complete();
