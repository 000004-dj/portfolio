import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateOptions = {
	openedSidebar: boolean;
};

const initialState: StateOptions = {
	openedSidebar: true,
};

const slice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		toggleSidebar: (state, action: PayloadAction<boolean>) => {
			state.openedSidebar = action.payload;
		}
	},
});

export const { actions: mainActions, reducer: mainReducer } = slice;
