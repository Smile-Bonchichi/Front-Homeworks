import { createSlice } from '@reduxjs/toolkit';

const operationSlice = createSlice({
    name: 'operationSlice',
    initialState: {
        number: 0
    },
    reducers: {
        plus: (state, action) => {
            state.number =
                +action.payload.firstNumber + +action.payload.secondNumber;
        },
        minus: (state, action) => {
            state.number =
                action.payload.firstNumber - action.payload.secondNumber;
        },
        multiply: (state, action) => {
            state.number =
                action.payload.firstNumber * action.payload.secondNumber;
        },
        divide: (state, action) => {
            state.number =
                action.payload.firstNumber / action.payload.secondNumber;
        }
    }
});

export const { plus, minus, multiply, divide } = operationSlice.actions;
export default operationSlice.reducer;
