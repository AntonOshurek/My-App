import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appStoreData } from '../store-data/app-store-data';
//types
import type { AppThunk } from '../../types/store-types';
import type { ISetMyCityActionType, ISetLoginActionType, ISetLanguageActionType } from '../../types/action-types';
//API
import myAppStorageApi from '../../api/storage-api/my-app-storage-api';

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
  },
});

export const { setMyCity } = appSlice.actions;

export const setMyCityAction =
  (action: ISetMyCityActionType): AppThunk =>
  (dispatch, getState) => {
    dispatch(appSlice.actions.setMyCity(action));
		myAppStorageApi.setData(getState().app);
  };

export const setLoginAction =
  (action: ISetLoginActionType): AppThunk =>
  (dispatch, getState) => {
    dispatch(appSlice.actions.setLogin(action));
		myAppStorageApi.setData(getState().app);
  };

export const setLanguageAction =
  (action: ISetLanguageActionType): AppThunk =>
  (dispatch, getState) => {
    dispatch(appSlice.actions.setLanguage(action));
		myAppStorageApi.setData(getState().app);
  };

export default appSlice.reducer;
