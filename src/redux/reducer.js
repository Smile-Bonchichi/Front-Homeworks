export default function reducer(state = {
    number: 0
}, action) {
    if (action.type === 'INCREMENT') {
        return { ...state, number: state.number + 1 };
    } else if (action.type === 'DECREMENT') {
        return { ...state, number: state.number - 1 };
    }
    
    return state;
}