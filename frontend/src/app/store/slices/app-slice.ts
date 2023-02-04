import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appStoreData } from '../store-data/app-store-data';
//types
import type { AppThunk } from '../../types/store-types';
import type { ISetMyCityActionType } from '../../types/action-types';
//API
import myAppStorageApi from '../../api/storage-api/my-app-storage';

export const appSlice = createSlice({
  name: 'app',
  initialState: appStoreData,

  reducers: {
    setMyCity: (state, action: PayloadAction<ISetMyCityActionType>) => {
      const { myCity } = action.payload;
      state.myCity = myCity;
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

export default appSlice.reducer;
