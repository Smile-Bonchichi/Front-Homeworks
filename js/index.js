// № 1: Не очень понял что делать, если уже все сделано :), просто сделал review кода
// Пытался вытащить размер блока, но он все время пустой: block.style.width, не работает :(

const block = document.querySelector('.block');

let xPosition = 0;
let yPosition = 0;

const step = 20;
const stepTime = 100;

const moveBlock = () => {
    if (xPosition <= 340 && yPosition === 0) {
        block.style.left = `${ xPosition += step }px`;
        setTimeout(moveBlock, stepTime);
    } else if (xPosition >= 340 && yPosition <= 340) {
        block.style.top = `${ yPosition += step }px`;
        setTimeout(moveBlock, stepTime);
    } else if (yPosition >= 340 && xPosition !== 0) {
        block.style.left = `${ xPosition -= step }px`;
        setTimeout(moveBlock, stepTime);
    } else if (xPosition === 0 && yPosition !== 0) {
        block.style.top = `${ yPosition -= step }px`;
        setTimeout(moveBlock, stepTime);
    }
};

moveBlock();

// № 2:
let timeOfStartProject = 0;

setInterval(() => {
    console.log((timeOfStartProject += 1) + ' секунд работает приложение');
}, 1000);