export const actionType = {
    plus: 'PLUS',
    minus: 'MINUS',
    multiply: 'MULTIPLY',
    divide: 'DIVIDE'
};

export default function reducer(state = {
    number: 0
}, action) {
    if (action.type === actionType.plus) {
        return {
            ...state,
            number: +action.payload.firstNumber + +action.payload.secondNumber
        };
    } else if (action.type === actionType.minus) {
        return {
            ...state,
            number: action.payload.firstNumber - action.payload.secondNumber
        };
    } else if (action.type === actionType.multiply) {
        return {
            ...state,
            number: action.payload.firstNumber * action.payload.secondNumber
        };
    } else if (action.type === actionType.divide) {
        return {
            ...state,
            number: action.payload.firstNumber / action.payload.secondNumber
        };
    }
    
    return state;
}