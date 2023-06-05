import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/app-slice';
import weatherReducer from './slices/weather-slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
		weather: weatherReducer,
  },
});
