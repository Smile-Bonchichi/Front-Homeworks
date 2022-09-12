console.log("Задание №1");

const yodaSays = ["on JavaScript", "programming ", "I like "];
// console.log(yodaSays.reverse().toString().replace(',', ''));
console.log(yodaSays[2] + yodaSays[1] + yodaSays[0]);

console.log("Задание №2");

const duck = {
    name: "Donald",
    color: "white",
    age: 1
};

console.log("My name is " + duck.name + ".");
console.log("I am " + duck.age + " year old.");
console.log("My color is " + duck.color + ".");

console.log("Задание №3");

user = {
    login: "admin",
    password: "BlackOverlord"
};

const login = prompt("Введите логин:");

if (user.login === login) {
    const password = prompt("Введите пароль:");
    if (user.password === password) {
        alert("Welcome");
    } else if (password == null) {
        alert("Login canceled");
    } else {
        alert("Wrong Password");
    }
} else if (login === '' || login == null) {
    alert("Login canceled");
} else {
    alert("Unknown user");
}

console.log("Задание №4");

const array = ['milk', 'beer', 'beer', 'milk', 'milk'];

for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === 'milk') {
        console.log("good");
    } else if (array[i].toLowerCase() === 'beer') {
        console.log("bad");
    }
}

console.log("Задание №5");

const symbol = prompt("Введите символ:");
let symbolForAlert = "";
const widthLength = 20;
const heightLength = 7;

for (let i = 0; i < widthLength; i++) symbolForAlert += symbol;
symbolForAlert += "\n";

for (let i = 0; i < heightLength - 2; ++i) {
    symbolForAlert += symbol;

    for (let j = 0; j < widthLength - 2; ++j) symbolForAlert += " ";
    symbolForAlert += symbol + "\n";
}

if (heightLength > 1) {
    for (let i = 0; i < widthLength; i++) symbolForAlert += symbol;
    symbolForAlert += "\n";
}
alert(symbolForAlert);

console.log("Задание №6");

const time = prompt("Введите время в секундах:");
let timeTemp = +time / 60;
if (timeTemp / 60 < 1) {
    alert("Осталось менее часа");
} else {
    alert("Осталось " + Math.floor(timeTemp / 60) + " часов");
}

console.log("Задание №7");

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const a = getRandomInt(9);
const b = getRandomInt(9);
const answer = prompt(
    "Введите ответ: " +
    a +
    " * " +
    b +
    " = ?"
);

if ((a * b) === +answer) {
    alert("You are correct!");
} else {
    alert("You are wrong");
}
