import { combineReducers } from 'redux';
import numberListReducer from './number-list-reducer/NumberListReducer.js';

export const rootReducer = combineReducers({
    numberListReducer
});