import { IWeatherAllDaysDataType, IWeatherOneDayDataType } from "../applications/weather-app/types/weather-data-types";
//vars
import { ColorThemes } from "../variables/color-themes";

//app selectors types
export type SelectorGetMyCityStateType =  string | null;
export type SelectorGetLoginStateType = string ;
export type SelectorGetLanguageStateType = string;
export type SelectorGetColorThemeStateType = ColorThemes;

//weather selectors types
export type SelectorGetWeatherAllDaysType = IWeatherAllDaysDataType | null;
export type SelectorGetWeatherCurrentDayType = IWeatherOneDayDataType | null;
export type SelectorGetWeatherLoadingType = boolean;
export type SelectorGetWeatherErrorType = string | null;
