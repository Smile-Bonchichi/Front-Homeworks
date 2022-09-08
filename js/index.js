alert("Задание №1");

const answerSquare = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало:");
if (answerSquare == 5 || answerSquare.toLowerCase() === "five") {
    alert("Верно");
} else {
    alert("Не верно");
}

alert("Задание №2");
const answerYear = prompt("Сколько вам лет:");
if (answerYear < 120 && answerYear > 1) {
    if (answerYear >= 1 && answerYear <= 13) {
        alert("Посмотрите мультики");
    } else if (answerYear >= 14 && answerYear <= 17) {
        alert("Посмотрите приключенческий фильм");
    } else {
        alert("Посмотрите серьезный фильм");
    }
} else {
    alert("Не врите :)");
}

alert("Задание №3");
const answerDrink = prompt("Ваш любимый напиток:");
if (answerDrink.toLowerCase() === "beer" || answerDrink.toLowerCase() === "vodka") {
    alert("Это плохо :(");
} else if (answerDrink.toLowerCase() === "coffee") {
    alert("Это менее плохо, но все равно плохо :(");
} else if (answerDrink.toLowerCase() === "milk") {
    alert("Молодец, это уже хорошо :)");
} else {
    alert(
        "А фиг его знает что это :) " +
        "P.S. в тз такого не было)"
    );
}

alert("Задание №4");
const number = 10;

alert("== нужно, ибо = это присваивание.");
// if (number = 11) {
//     alert('Number is 11!');
// } else {
//     alert('Number is 10!');
// }

alert("Задание №5");
alert("(2 < 3) && (3 > 4) || true");
alert("(true) && (false) || true");
alert("false || true");
alert("true");

alert("!true && (!true || 100 != 5 * 5)");
alert("!true && (false || 100 != 25)");
alert("!true && (false || true)");
alert("false && true");
alert("false");

alert("(\"123\" == 123) || ((10 <= 10) && ('' === false))");
alert("true || (true && false)");
alert("true || false");
alert("true");
