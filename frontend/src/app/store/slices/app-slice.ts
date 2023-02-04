import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { appInitialState } from '../state/app-state/app-initial-state';
//types
import type { AppThunk } from '../../types/store-types';
import type { ISetMyCityActionType } from '../../types/action-types';

export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,

  reducers: {
    setMyCity: (state, action: PayloadAction<ISetMyCityActionType>) => {
      const {myCity} = action.payload;
      state.myCity = myCity;
    },
  },
});

export const { setMyCity } = appSlice.actions;

export const setMyCityAction =
  (action: ISetMyCityActionType): AppThunk =>
  (dispatch, getState) => {
    dispatch(appSlice.actions.setMyCity(action));
  };

export default appSlice.reducer;
