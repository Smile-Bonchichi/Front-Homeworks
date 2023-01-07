import { configureStore } from '@reduxjs/toolkit';
import operationReducer from './slice/operationSlice';

export const store = configureStore({
    reducer: {
        operationReducer
    }
});
