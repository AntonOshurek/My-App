import { useEffect } from "react";
//components
import {WeatherApplication, WeatherFullInfo, SunRange} from "../";
//api
import weatherApi from "../../api/weather-api";
//store
import { SelectorGetLanguageState, SelectorGetMyCityState } from "../../../../store/selectors/app-selectors";
import { useAppDispatch, useAppSelector } from "../../../../generic-utils/hooks/hooks";
import { setWeatherAllDaysAction, setWeatherLoadingAction } from "../../../../store/actions/weather-actions";
import { setWeatherError } from "../../../../store/slices/weather-slice";
//types
import type { SelectorGetLanguageStateType, SelectorGetMyCityStateType } from "../../../../types/selector-types";

const WeatherAppWrap = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const myCity: SelectorGetMyCityStateType = useAppSelector(SelectorGetMyCityState);
	const myLanguage: SelectorGetLanguageStateType = useAppSelector(SelectorGetLanguageState);

	useEffect(() => {
		if (myCity !== null) {
			dispatch(setWeatherLoadingAction({loading: true}));

			weatherApi.getWeather(myCity, myLanguage)
				.then((response) => {
					dispatch(setWeatherAllDaysAction({weather: response}));
				})
				.catch((error) => {
					dispatch(setWeatherError({error: error.toString()}));
					dispatch(setWeatherLoadingAction({loading: false}));
				});
		} else if (myCity === null) {
			dispatch(setWeatherError({error: 'Please, choice your city for show weatehr'}));
		} else {
			dispatch(setWeatherError({error: 'Ooops... somthing wrong'}));
		};
	}, [myCity]);

	return (
		<>
			<WeatherApplication/>
			{/* <SunRange/> */}
			<WeatherFullInfo/>
		</>
	);
};

export default WeatherAppWrap;
