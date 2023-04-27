import { ColorThemes } from '../variables/color-themes';

export interface IAppStoreDataType {
	myCity: string,
	language: string,
	login: string,
	colorTheme: ColorThemes,
};

export type StoreDataTypes = IAppStoreDataType;
