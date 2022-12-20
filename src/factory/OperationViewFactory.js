import { actionType } from '../redux/reducer.js';

export const operationViewFactory = (action) => {
    switch (action) {
        case actionType.plus:
            return '+';
        case actionType.minus:
            return '-';
        case actionType.multiply:
            return '*';
        case actionType.divide:
            return '/';
        default:
            return undefined;
    }
};