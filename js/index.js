/*№ 5*/

//№ 1
const inputItem = document.getElementById('add-item-btn');
const divContainer = document.getElementById('container');

inputItem.onclick = () => {
    const element = document.createElement('div');
    element.className = 'element';
    element.innerHTML = 'Element';

    divContainer.appendChild(element);
};

//№ 2
const inputLogin = document.getElementsByName('username');
const inputPassword = document.getElementsByName('password');
const inputButton = document.getElementsByName('LogInButton');

inputLogin.onkeyup = () => {
    if (inputLogin.value.length >= 6 && inputPassword.value.length >= 6) {
        inputButton.disabled = true;
    }
};

inputPassword.onkeyup = () => {
    if (inputPassword.value.length >= 6 && inputLogin.value.length >= 6) {
        inputButton.disabled = true;
    }
};

inputButton.onclick = () => {
    alert('Login: ' + inputLogin.value + '\nPassword: ' + inputPassword.value);
};

//№ 3
document.querySelectorAll('.helper-answer')
    .forEach((el) =>
        el.addEventListener('click', (e) => {
                changeQA(e.target, ['Показать ответ', 'Скрыть ответ'], 'interaction');
            }
        )
    );

const changeQA = (e, arr, toggle) => {
    e.state = +!e.state;
    e.textContent = arr[e.state];

    e.nextElementSibling.classList.toggle(toggle);
}
