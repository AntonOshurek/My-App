import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//data
import { weatherAppStoreData } from "../store-data/weather-store-data";
//types
import type { ISetWeatherAllDays, ISetWeatherCurrentDay, ISetWeatherError, ISetWeatherLoading } from "../../types/action-types";

export const weatherSlice = createSlice({
	name: 'weather',
	initialState: weatherAppStoreData,

	reducers: {
		setWeatherAllDays: (state, action: PayloadAction<ISetWeatherAllDays>) => {
			const { weather } = action.payload;
			state.allWeatherDays = weather;
		},
		setWeatherCurrentDay: (state, action: PayloadAction<ISetWeatherCurrentDay>) => {
			const { weather } = action.payload;
			state.currentWeatherDay = weather;
		},
		setWeatherLoading: (state, action: PayloadAction<ISetWeatherLoading>) => {
			const { loading } = action.payload;
			state.loading = loading;
		},
		setWeatherError: (state, action: PayloadAction<ISetWeatherError>) => {
			const { error } = action.payload;
			state.error = error;
		},
	}
});

export const { setWeatherAllDays, setWeatherCurrentDay, setWeatherLoading, setWeatherError } = weatherSlice.actions;

export default weatherSlice.reducer;
