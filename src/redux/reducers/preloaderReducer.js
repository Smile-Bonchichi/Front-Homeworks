import { types } from '../types';

export default function preloaderReducer(
    state = {
        preloader: false
    }, action) {
    switch (action.type) {
        case types.PRELOADER_ON:
            return { ...state, preloader: true };
        case types.PRELOADER_OFF:
            return { ...state, preloader: false };
        default:
            return state;
    }
}
