/*№ 4*/

//№ 1
console.log('Задание №1');
console.log(document.getElementById('string-3').textContent);
console.log(document.getElementById('string-5').textContent);
console.log(document.getElementById('string-2').textContent);
console.log(document.getElementById('string-6').textContent);
console.log(document.getElementById('string-4').textContent);
console.log(document.getElementById('string-1').textContent);

//№ 2
console.log('Задание №2');
const arrayByElement = document.getElementsByClassName('element');

for (let i = 0; i < arrayByElement.length; i++) {
    if (i < 3) {
        arrayByElement.item(i).style.color = 'red';
    } else {
        arrayByElement.item(i).style.color = 'green';
    }
}

//№ 3
console.log('Задание №3');
const todoList = document.getElementById('todo-list');
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

for (let i = 0; i < tasks.length; i++) {
    todoList.innerHTML += '<li class="task">' + tasks[i] + '</li>';
}

//№ 4
console.log('Задание №4');
const pElement = document.getElementsByTagName('p');

for (let i = 0; i < pElement.length; i++) {
    pElement.item(i).insertAdjacentElement('afterend', document.createElement('hr'));
}

//№ 5
console.log('Задание №5');
const arrayByItem = document.getElementsByClassName('item');
const fishElement = document.createElement('div');
fishElement.className = 'item';
fishElement.innerHTML = 'Canned Fish <span class="qty">x 4</span>';

for (let i = 0; i < arrayByItem.length; i++) {
    if (arrayByItem.item(i).textContent.includes('Cola 1.5 l')) {
        arrayByItem.item(i).remove();
    }
    if (arrayByItem.item(i).textContent.includes('Chocolate bar')) {
        for (let j = 0; j < 4; j++) {
            arrayByItem.item(arrayByItem.length - 1).parentNode.append(fishElement);
        }

        arrayByItem.item(i).remove();
    }
}

//№ 6
console.log('Задание №6');
let todoItemTemp = '';
let todoListArray = [];

while (true) {
    todoItemTemp = prompt('Введите задачу в TODO:');
    console.log(todoItemTemp);
    if (todoItemTemp === null || todoItemTemp === '') {
        break;
    }
    todoListArray.push(todoItemTemp);
}

const todoListUser = document.getElementById('todo-list-user');
for (let i = 0; i < todoListArray.length; i++) {
    todoListUser.innerHTML += '<li>' + todoListArray[i] + '</li>';
}

/*№ 4.1*/

//№ 1
const random = (max) => Math.floor(Math.random() * max) + 1;

const game = {
    rockPaperScissors: 0,
    countWin: 0,
    countLose: 0,
};

let inputTemp;

while (true) {
    inputTemp = prompt('Введите камень -> 1, ножницы -> 2 или бумагу -> 3:');

    if (inputTemp === null) {
        break;
    }

    game.rockPaperScissors = random(3);
    if (+inputTemp === game.rockPaperScissors) {
        game.countWin++;
        alert('Вы выиграли');
    } else {
        game.countLose++;
        alert('Вы проиграли');
    }
}

alert('Вы выиграли: ' + game.countWin + ' раза\nВы проиграли: ' + game.countLose + ' раза');

//№ 2
const words = [
    'Выигрыш',
    'Камень',
    'Инкапсуляция',
    'SOLID',
    'Паттерн'
];
const extraHints = [
    'Очень радостный',
    'Очень твердый',
    'Первый принцип ООП',
    'Сборник принципов проектирования ПО',
    'Синоним слова шаблон'
];

const gallows = {
    word: '',
    encodeWord: '',
    extraHint: '',

    countTrying: 0
};

const randomWord = random(words.length - 1);

gallows.word = words[randomWord];
gallows.extraHint = extraHints[randomWord];
for (let i = 0; i < gallows.word.length; i++) {
    gallows.encodeWord += '_';
}

alert(gallows.extraHint);
let inputWord = '';
while (true) {
    inputWord = prompt('Введите слово или букву: ' + gallows.encodeWord);

    if (inputWord === null) {
        break;
    }

    if (inputWord === gallows.word) {
        alert('Вы выиграли');
        break;
    } else {
        for (let i = 0; i < gallows.word.length; i++) {
            if (gallows.word[i].toLowerCase() === inputWord.toLowerCase()) {
                gallows.encodeWord[i] = inputWord;
            }
        }

        if (!gallows.encodeWord.includes('_')) {
            alert('Вы выиграли');
            break;
        }
    }
}
