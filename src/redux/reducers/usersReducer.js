import { types } from '../types';

export default function usersReducer(
    state = {
        user: {},
        users: []
    }, action) {
    switch (action.type) {
        case types.GET_USERS:
            return { ...state, users: action.payload };
        case types.GET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}