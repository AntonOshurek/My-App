//store
import type { ISetWeatherAllDays, ISetWeatherCurrentDay, ISetWeatherError, ISetWeatherLoading } from "../../types/action-types";
import { AppThunk } from "../../types/store-types";
import { setWeatherAllDays, setWeatherCurrentDay, setWeatherLoading, setWeatherError } from "../slices/weather-slice";

export const setWeatherAllDaysAction =
	(action: ISetWeatherAllDays): AppThunk =>
		(dispatch, getState) => {
			if(getState().weather.error !== null) {
				dispatch(setWeatherError({error: null}));
			};

			dispatch(setWeatherAllDays(action));
			dispatch(setWeatherCurrentDayAction({weather: action.weather[0]}));

			if(getState().weather.loading) {
				dispatch(setWeatherLoadingAction({loading: false}));
			};
		};

export const setWeatherCurrentDayAction =
	(action: ISetWeatherCurrentDay): AppThunk =>
		(dispatch, getState) => {
			dispatch(setWeatherCurrentDay(action));
		};

export const setWeatherLoadingAction =
(action: ISetWeatherLoading): AppThunk =>
	(dispatch, getState) => {
		dispatch(setWeatherLoading(action));
	};

export const setWeatherErrorAction =
	(action: ISetWeatherError): AppThunk =>
	(dispatch, getState) => {
		dispatch(setWeatherError(action));
	};
