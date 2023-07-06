//types
import { IPassOptions } from "../types/app-types";

export enum ApplicationStorageApiNames {
	APP_STORAGE = 'myApp',
	WEATHER_STORAGE = 'myWeather',
};

export const enum InputsTypes {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	NUMBER = 'number',
};

export enum passGeneratorCheckboxOptionsID {
	LOWERCASE = 'lowercase',
	UPPERCASE = 'upercase',
	NUMBERS = 'numbers',
	SYMBOLS = 'symbols',
};

export const defaulstPassOptions: IPassOptions = {
	length: 10,
	[passGeneratorCheckboxOptionsID.LOWERCASE]: true,
	[passGeneratorCheckboxOptionsID.NUMBERS]: true,
	[passGeneratorCheckboxOptionsID.UPPERCASE]: true,
	[passGeneratorCheckboxOptionsID.SYMBOLS]: false,
	phrase: '',
};
