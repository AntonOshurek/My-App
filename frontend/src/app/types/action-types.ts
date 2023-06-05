//types
import type { IWeatherAllDaysDataType, IWeatherOneDayDataType } from '../applications/weather-app/types/weather-data-types';
//variables
import { ColorThemes } from '../variables/color-themes';

export interface ISetMyCityActionType {
	myCity: string,
};

export interface ISetLoginActionType {
	login: string,
};

export interface ISetLanguageActionType {
	language: string,
};

export interface ISetColorThemeActionType {
	colorTheme: ColorThemes,
};

export interface ISetWeatherAllDays {
	weather: IWeatherAllDaysDataType,
};

export interface ISetWeatherCurrentDay {
	weather: IWeatherOneDayDataType,
};

export interface ISetWeatherLoading {
	loading: boolean,
};

export interface ISetWeatherError {
	error: string,
};
