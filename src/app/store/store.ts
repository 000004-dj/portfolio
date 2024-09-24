import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from '../../shared/slices/main.slice';

const rootReducer = combineReducers({
	main: mainReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});
