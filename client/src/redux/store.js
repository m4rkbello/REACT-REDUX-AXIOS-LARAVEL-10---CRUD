import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from '../redux/Reducers'; // Assuming Reducer is exported as default from './Reducers'

const rootReducer = combineReducers({
  user: Reducer, 
});

const store = configureStore({
  reducer: rootReducer, 
});

export default store;
