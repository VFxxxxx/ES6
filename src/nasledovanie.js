class Task {
  constructor(title) {
    this.title = title;
    this.done = false;
    console.log(`Task was created`);
  }
}

class SubTask extends Task {
  constructor(title) {
    super(title);
  }
}

let task = new Task(`JS`);
let subtask = new SubTask(`ES6`);

console.log(task);
console.log(subtask);
