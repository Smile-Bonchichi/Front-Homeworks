const kgs = document.querySelector('#kgs');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convertCurrency = (elem) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        
        request.open('GET', '../json/data.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        
        request.addEventListener('load', () => {
            const res = JSON.parse(request.response);
            
            if (elem.id === kgs.id) {
                usd.value = (elem.value / res.usd).toFixed(2);
                eur.value = (elem.value / res.eur).toFixed(2);
                
                if (!elem.value) {
                    usd.value = '';
                    eur.value = '';
                }
            } else if (elem.id === usd.id) {
                kgs.value = (elem.value * res.usd).toFixed(2);
                eur.value = (elem.value * res.usd / res.eur).toFixed(2);
                
                if (!elem.value) {
                    kgs.value = '';
                    eur.value = '';
                }
            } else if (elem.id === eur.id) {
                kgs.value = (elem.value * res.eur).toFixed(2);
                usd.value = (elem.value * res.eur / res.usd).toFixed(2);
                
                if (!elem.value) {
                    kgs.value = '';
                    usd.value = '';
                }
            }
        });
    });
};

convertCurrency(kgs);
convertCurrency(usd);
convertCurrency(eur);