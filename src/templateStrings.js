function sendEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    from: ${from}
    subject: ${subject}
    message: ${message}
    `);
}

sendEmail("test@mail.com","testFrom@mail.com","Hello","How are you?");


function add(x ,y) {
  console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}

add(1,2);
add(5,6);

//теги
let name = 'Vladimir';
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}
