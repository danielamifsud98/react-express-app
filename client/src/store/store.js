import { createStore, combineReducers } from 'redux';
import { slotResults } from './reducers';
 
const reducers = {
    slotResults,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);