const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabContent = document.querySelectorAll('.tabcontent');

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
};

hideTabContent();
showTabContent();

let index = 0;

const slider = () => {
    hideTabContent();
    showTabContent(index++);
    
    if (tabs.length === index) {
        index = 0;
    }
};

setInterval(slider, 5000);

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
                
                index = i;
            }
        });
    }
});

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modalTrigger.addEventListener('click', openModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('scroll', () => {
    if ((pageYOffset + window.innerHeight) ===
        document.documentElement.scrollHeight) {
        openModal();
    }
});

const forms = document.querySelectorAll('form');

const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
};

const bindPostData = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const object = {};
        
        formData.forEach((item, i) => {
            object[i] = item;
        });
        
        const body = JSON.stringify(object);
        
        postData('../json/data.json', body).then(() => {
            alert('Спасибо за обращение');
        }).catch(() => {
            alert('Что-то пошло не так');
        });
    });
};

forms.forEach(f => {
    bindPostData(f);
});
