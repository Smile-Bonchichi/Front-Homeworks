/*№ 3*/

//№ 1
const firstNumber = +prompt("Введите первое число:");
const secondNumber = +prompt("Введите второе число:");

if (firstNumber > secondNumber) {
    console.log("Первое число больше второго");
} else if (firstNumber < secondNumber) {
    console.log("Первое число меньше первого");
} else if (firstNumber === secondNumber) {
    console.log("Числа равны");
} else {
    console.log("Где-то ты свернул не туда :)");
}

//№ 2
const world = prompt("Введите слово:");
let resultWorld = "";

for (let i = 0; i < world.length * 1.5; i++) {
    resultWorld += "*";
}

resultWorld += "\n*" + world + "*\n";

for (let i = 0; i < world.length * 1.5; i++) {
    resultWorld += "*";
}

alert(resultWorld);

//№ 3
const inputDate = Date.parse(prompt("Введите дату своего рождения"));
const nowDate = new Date().getTime();

const seconds = Math.abs(Math.floor((inputDate - nowDate) / (1000 * 60)));
const minutes = Math.abs(Math.floor(seconds / 60));
const days = Math.abs(Math.floor(minutes / 24));
const months = Math.abs(Math.floor(days / 30));
const years = Math.abs(Math.floor(months / 12));

console.log(years + " лет вы прожили");
console.log(months + " месяцев вы прожили");
console.log(days + " дня вы прожили");
console.log(minutes + " минут вы прожили");
console.log(seconds + " секунд вы прожили");

//№ 4
let avgTemp = 0;
let countTemp = 0;
let inputNumber;
while (true) {
    inputNumber = prompt("Введите число:");

    if (Number.isInteger(+inputNumber) && (inputNumber >= 1 && inputNumber <= 100)) {
        avgTemp += +inputNumber;
        countTemp++;
    }

    if (inputNumber == null) break;
}

alert("Количество введенных чисел: " + countTemp + "\nСреднее арифметическое:" + avgTemp);

//№ 5
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

let inputAnswer = 0;
let countAnswerTrue = 0;
let countAnswerFalse = 0;
while (true) {
    let a = getRandomInt(9);
    let b = getRandomInt(9);
    inputAnswer = prompt(
        "Введите ответ: " +
        a +
        " * " +
        b +
        " = ?"
    );

    if ((a * b) === +inputAnswer) {
        countAnswerTrue++;
    } else if ((a * b) !== +inputNumber && inputNumber != null) {
        countAnswerFalse++;
    }

    if (inputAnswer == null) break;
}

alert("Количество правильных: " + countAnswerTrue + "\nКоличество неправильных: " + countAnswerFalse);

//№ 6
const inputX = prompt("Введите x:");
const inputY = prompt("Введите y:");

const border = {
    x: inputX,
    y: inputY,
};

if (+border.x > 0 && +border.y > 0) {
    alert("NW");
} else if (+border.x < 0 && +border.y > 0) {
    alert("NE");
} else if (+border.x > 0 && +border.y < 0) {
    alert("SW");
} else if (+border.x < 0 && +border.y < 0) {
    alert("SE");
}

//№ 7
const counter = {
    count: 0,
    between: ""
}

let randomNumberTemp = 0;
let countRandomNumbers = [counter, counter, counter, counter, counter, counter, counter, counter, counter, counter];
for (let i = 0; i < 101; i++) {
    randomNumberTemp = getRandomInt(99);

    if (randomNumberTemp >= 0 && randomNumberTemp <= 9) {
        countRandomNumbers[0].count++;
        countRandomNumbers[0].between = "0-9";
    } else if (randomNumberTemp >= 10 && randomNumberTemp <= 19) {
        countRandomNumbers[1].count++;
        countRandomNumbers[1].between = "10-19";
    } else if (randomNumberTemp >= 20 && randomNumberTemp <= 29) {
        countRandomNumbers[2].count++;
        countRandomNumbers[2].between = "20-29";
    } else if (randomNumberTemp >= 30 && randomNumberTemp <= 39) {
        countRandomNumbers[3].count++;
        countRandomNumbers[3].between = "30-39";
    } else if (randomNumberTemp >= 40 && randomNumberTemp <= 49) {
        countRandomNumbers[4].count++;
        countRandomNumbers[4].between = "40-49";
    } else if (randomNumberTemp >= 50 && randomNumberTemp <= 59) {
        countRandomNumbers[5].count++;
        countRandomNumbers[5].between = "50-59";
    } else if (randomNumberTemp >= 60 && randomNumberTemp <= 69) {
        countRandomNumbers[6].count++;
        countRandomNumbers[6].between = "60-69";
    } else if (randomNumberTemp >= 70 && randomNumberTemp <= 79) {
        countRandomNumbers[7].count++;
        countRandomNumbers[7].between = "70-79";
    } else if (randomNumberTemp >= 80 && randomNumberTemp <= 89) {
        countRandomNumbers[8].count++;
        countRandomNumbers[8].between = "80-89";
    } else if (randomNumberTemp >= 90 && randomNumberTemp <= 99) {
        countRandomNumbers[9].count++;
        countRandomNumbers[9].between = "90-99";
    }
}

for (let i = 0; i < countRandomNumbers.length; i++) {
    if (countRandomNumbers[i].count !== 0) {
        console.log(
            "Количество случайный чисел в группе " +
            countRandomNumbers[i].between +
            ": " +
            countRandomNumbers[i].count
        );
    }
}

/*№ 3.1*/

//№ 1
const C = prompt("Введите градусы:");
const getF = (c) => (c * 9 / 5) + 32;

alert(C + " градусов по цельсия это " + getF(C) + " по фаренгейта");

//№ 2
const number = prompt("Введите число");

const validator = (number) => {
    if (number == null) {
        return "Вы нажали \"Отмена\"";
    } else if (!Number.isInteger(+number)) {
        return "Вы ввели не число";
    } else if (+number === 0) {
        return "Вы ввели ноль";
    } else if (+number > 0) {
        return "Вы ввели положительное число";
    } else if (+number < 0) {
        return "Вы ввели отрицательное  число";
    }
}

alert(validator(number));

//№ 3
const power = (digit, degree) => {
    for (let i = 0; i < degree; i++) {
        digit *= digit;
    }

    return digit;
}

const digit = prompt("Введите число:");
const degree = prompt("Введите степень:");

alert(power(digit, degree));

//№ 4
const countChars = (symbol, word) => {
    let countSymbol = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === symbol) {
            countSymbol++;
        }
    }
    return countSymbol;
}

const symbol = prompt("Введите символ:");
const word = prompt("Введите слово:");

alert(countChars(symbol, word));

//№ 5
const getAvgArray = (array = []) => {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
    }

    return average / array.length;
}

const southData = [13, 15, 19, 26, 21, 22, 23];
const westData = [15, 14, 16, 18, 17, 24, 25];
const eastData = [20, 17, 19, 15, 24, 25, 26];
const northData = [19, 18, 23, 20, 23, 19, 31];

console.log(getAvgArray(southData));
console.log(getAvgArray(westData));
console.log(getAvgArray(eastData));
console.log(getAvgArray(northData));
