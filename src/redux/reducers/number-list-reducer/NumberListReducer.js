export const actionNumberType = {
    add: 'ADD',
    clear: 'CLEAR'
};

export default function numberListReducer(state = {
    sum: 0
}, action) {
    switch (action.type) {
        case actionNumberType.add:
            return { ...state, sum: action.payload };
        case actionNumberType.clear:
            return { ...state, sum: 0 };
        default:
            return state;
    }
}
