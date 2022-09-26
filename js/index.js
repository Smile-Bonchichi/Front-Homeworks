/*№ 6*/

// № 1
const findSum = (obj) => {
    let sum = 0;

    for (let i in obj) {
        if (!isNaN(obj[i])) {
            sum += obj[i];
        }
    }
    return sum;
};

const salaries = {
    "Vasiliy": 100,
    "Piotr": 300,
    "Daria": 250,
    "isPaid": false
};

console.log(findSum(salaries));

// № 2

const findSumByEven = (arr = []) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

const numbers = [1, 2, 5, 10, 15, 25, 32, 'Jack', 64];

console.log(findSumByEven(numbers));

// № 3
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numberOfAttempts = 0;
const randomNumber = getRandomNumber(1, 7);
while (true) {
    const inputNumber = prompt("Введите число:");

    if (inputNumber === null) {
        break;
    }

    if (+inputNumber === randomNumber) {
        alert("Вы выиграли!!!");
        break;
    } else if (!isNaN(inputNumber) || (+inputNumber < 7 || +inputNumber > 1)) {
        numberOfAttempts++;
        if (numberOfAttempts === 3) {
            alert("Вы проиграли!!!");
            break;
        }
    }
}
