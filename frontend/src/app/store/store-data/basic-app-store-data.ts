//variables
import { ColorThemes } from '../../variables/color-themes';
//types
import type { IAppStoreDataType } from "../../types/store-data-types";

export const basicAppStoreData: IAppStoreDataType = {
	myCity: null,
	language: 'en',
	login: '',
	colorTheme: ColorThemes.THEME_DARK,
};
