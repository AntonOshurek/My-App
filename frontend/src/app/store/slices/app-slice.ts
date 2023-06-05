import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appStoreData } from '../store-data/app-store-data';
//types
import type {
	ISetMyCityActionType,
	ISetLoginActionType,
	ISetLanguageActionType,
	ISetColorThemeActionType
} from '../../types/action-types';

export const appSlice = createSlice({
	name: 'app',
	initialState: appStoreData,

	reducers: {
		setMyCity: (state, action: PayloadAction<ISetMyCityActionType>) => {
			const { myCity } = action.payload;
			state.myCity = myCity;
		},
		setLogin: (state, action: PayloadAction<ISetLoginActionType>) => {
			const { login } = action.payload;
			state.login = login;
		},
		setLanguage: (state, action: PayloadAction<ISetLanguageActionType>) => {
			const { language } = action.payload;
			state.language = language;
		},
		setColorTheme: (state, action: PayloadAction<ISetColorThemeActionType>) => {
			const { colorTheme } = action.payload;
			state.colorTheme = colorTheme;
		},
	},
});

export const { setMyCity, setLogin, setLanguage, setColorTheme } = appSlice.actions;

export default appSlice.reducer;
