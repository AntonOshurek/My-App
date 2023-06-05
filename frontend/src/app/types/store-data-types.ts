//types
import type { IWeatherAllDaysDataType, IWeatherOneDayDataType } from '../applications/weather-app/types/weather-data-types';
//vars
import { ColorThemes } from '../variables/color-themes';

export interface IAppStoreDataType {
	myCity: string,
	language: string,
	login: string,
	colorTheme: ColorThemes,
};

export type StoreDataTypes = IAppStoreDataType;

export interface IWeatherStoreDataType {
	allWeatherDays: IWeatherAllDaysDataType | null,
	currentWeatherDay: IWeatherOneDayDataType | null,
	loading: boolean,
	error: string,
};
