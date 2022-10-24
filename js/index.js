const request = new XMLHttpRequest();

request.open('GET', '../json/data.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.addEventListener('load', () => {
    console.log(JSON.parse(request.response));
});
