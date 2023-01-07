import {
    divide, minus, multiply, plus
} from '../store/slice/operationSlice.js';

export const operationViewFactory = (method) => {
    switch (method) {
        case plus:
            return '+';
        case minus:
            return '-';
        case multiply:
            return '*';
        case divide:
            return '/';
        default:
            return undefined;
    }
};
