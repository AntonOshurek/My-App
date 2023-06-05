//api
import { appStorageApi } from "../../api";
//types
import type { ISetColorThemeActionType, ISetLanguageActionType, ISetLoginActionType, ISetMyCityActionType } from "../../types/action-types";
import type { AppThunk } from "../../types/store-types";
//store
import { setMyCity, setLogin, setLanguage, setColorTheme } from "../slices/app-slice";

export const setMyCityAction =
	(action: ISetMyCityActionType): AppThunk =>
		(dispatch, getState) => {
			dispatch(setMyCity(action));
			appStorageApi.setData(getState().app);
		};

export const setLoginAction =
	(action: ISetLoginActionType): AppThunk =>
		(dispatch, getState) => {
			dispatch(setLogin(action));
			appStorageApi.setData(getState().app);
		};

export const setLanguageAction =
	(action: ISetLanguageActionType): AppThunk =>
		(dispatch, getState) => {
			dispatch(setLanguage(action));
			appStorageApi.setData(getState().app);
		};

export const setColorThemeAction =
	(action: ISetColorThemeActionType): AppThunk =>
		(dispatch, getState) => {
			dispatch(setColorTheme(action));
			appStorageApi.setData(getState().app);
		};
