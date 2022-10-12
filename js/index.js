//№ 1

const inputInn = document.querySelector('#inn');
const spanResult = document.querySelector('#result');

let inn = '';
const regExp = /^[1-2]\d{13}$/g;

inputInn.addEventListener('keypress', (ev) => {
    if (inn.length < 14) {
        inn = inputInn.value;
        
        if (regExp.test(inn.trim())) {
            spanResult.innerHTML = 'GOOD';
        } else {
            spanResult.innerHTML = 'BAD';
        }
    }
});

//№ 2
const buttonMove = document.querySelector('.move');
const divChild = document.querySelector('.child');

let left = 0;
let isCheck = true;
let switcher = true;

buttonMove.addEventListener('click', (ev) => {
    if (left === 450) {
        isCheck = false;
        switcher = false;
    } else if (left === 0) {
        isCheck = true;
    }
    
    divChild.style.left = (isCheck ? left += 10 : left -= 10) + 'px';
});
