/* № 7*/

// № 1
const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

let totalTimeFrontend = 0;
let totalTimeBug = 0;
let totalTimeUi = 0;

tasks.forEach((value) => {
    if (value.category === 'Frontend') {
        return totalTimeFrontend += value.timeSpent;
    }
});

tasks.forEach((value) => {
    if (value.type === 'bug') {
        return totalTimeBug += value.timeSpent;
    }
});

tasks.forEach((value) => {
    if (value.title.includes('UI')) {
        return totalTimeUi += value.timeSpent;
    }
});

const totalTaskCount = tasks.reduce((acc, value) => {
    if (value.category === 'Frontend') {
        acc.Frontend++;
    } else if (value.category === 'Backend') {
        acc.Backend++;
    }

    return acc;
}, {Frontend: 0, Backend: 0});

const totalTaskCountOverFour = tasks.reduce((acc, value) => {
    if (value.timeSpent > 4) {
        acc.push({title: value.title, category: value.category});
    }

    return acc;
}, []);

console.log(totalTimeFrontend);
console.log(totalTimeBug);
console.log(totalTimeUi);
console.log(totalTaskCount);
console.log(totalTaskCountOverFour);
