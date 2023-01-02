import { types } from './types';

function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    };
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    };
}

export function alertShow(info) {
    return {
        type: types.ALERT_ON,
        payload: info
    };
}

function alertHidden() {
    return {
        type: types.ALERT_OFF
    };
}

function addUsersAction(users) {
    return {
        type: types.GET_USERS,
        payload: users
    };
}

export function addUserAction(user) {
    return async function (dispatch) {
        
        dispatch(preloaderOn());
        dispatch(alertHidden());
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users', options
        );
        
        if (response.status === 201) {
            dispatch(alertShow({
                message: 'пользователь зарегестрирован',
                variant: 'success'
            }));
            dispatch(preloaderOff());
        } else if (response.status === 404) {
            dispatch(alertShow({ message: 'ошибка', variant: 'danger' }));
            dispatch(preloaderOff());
        }
        
        setTimeout(() => {
            dispatch(alertHidden());
        }, 3000);
    };
}

export function getUsersAction() {
    return async function (dispatch) {
        
        dispatch(preloaderOn());
        dispatch(alertHidden());
        
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        
        const data = await response.json();
        dispatch(addUsersAction(data));
        
        setTimeout(() => {
            dispatch(alertHidden());
        }, 3000);
    };
}
