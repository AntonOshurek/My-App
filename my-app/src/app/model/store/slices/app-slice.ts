import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import type { AppThunk } from '../../../../types/store-types';
import type { IIncrementType } from '../../../../types/action-types';

interface testIncrement {
	number: number
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {item: 1},

  reducers: {
    increment: (state, action: PayloadAction<testIncrement>) => {
      const {number} = action.payload;
      state.item = state.item + number;
    },
  },
});

export const { increment } = appSlice.actions;

export const incrementAction =
  (action: IIncrementType): AppThunk =>
  (dispatch, getState) => {
    dispatch(appSlice.actions.increment(action));
  };

export default appSlice.reducer;


