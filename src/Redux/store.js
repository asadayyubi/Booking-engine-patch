import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {reducer as reducerHotel } from './Hotel/reducer';
import {reducer as reducerUserData} from './UserData/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ reducerHotel, reducerUserData });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;
