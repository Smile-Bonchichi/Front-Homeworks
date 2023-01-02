import { types } from '../types';

export default function usersReducer(
    state = {
        users: []
    }, action) {
    switch (action.type) {
        case types.GET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}
