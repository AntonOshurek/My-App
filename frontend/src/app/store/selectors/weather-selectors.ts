//types
import type { SelectorGetWeatherAllDaysType, SelectorGetWeatherCurrentDayType, SelectorGetWeatherErrorType, SelectorGetWeatherLoadingType } from "../../types/selector-types";
import type { RootState } from "../../types/store-types";

export const SelectorGetWeatherAllDays = (state: RootState): SelectorGetWeatherAllDaysType => state.weather.allWeatherDays;
export const SelectorGetWeatherCurrentDay = (state: RootState): SelectorGetWeatherCurrentDayType => state.weather.currentWeatherDay;
export const SelectorGetWeatherLoading = (state: RootState): SelectorGetWeatherLoadingType => state.weather.loading;
export const SelectorGetWeatherError = (state: RootState): SelectorGetWeatherErrorType => state.weather.error;
