import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//components
import {WeatherApplication, WeatherFullInfo} from "../";
//utils
import { compareDates } from "../../../../generic-utils/utils/date-utils";
//api
import weatherApi from "../../api/weather-api";
//services
import locationService from "../../../../services/location-service/location.service";
//store
import { SelectorGetLanguageState, SelectorGetMyCityState } from "../../../../store/selectors/app-selectors";
import { useAppDispatch, useAppSelector } from "../../../../generic-utils/hooks/hooks";
import { setWeatherAllDaysAction, setWeatherCurrentDayAction } from "../../../../store/actions/weather-actions";
import { SelectorGetWeatherAllDays } from "../../../../store/selectors/weather-selectors";
import { setWeatherError } from "../../../../store/slices/weather-slice";
import { setMyCityAction } from "../../../../store/actions/app-actions";
import { setWeatherLoadingAction } from "../../../../store/actions/weather-actions";
//types
import type { SelectorGetWeatherAllDaysType } from "../../../../types/selector-types";

const WeatherAppWrap = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const myCity = useAppSelector(SelectorGetMyCityState);
	const myLanguage = useAppSelector(SelectorGetLanguageState);
	const weatherAllDays: SelectorGetWeatherAllDaysType = useAppSelector(SelectorGetWeatherAllDays);

	const { location, day } = useParams();

	useEffect(() => {
		if((location && location.length !== 0) && (location !== myCity)) {
			dispatch(setMyCityAction({myCity: location}));
			//show modal for change your city "do you want change your city to - city name
		} else if (!location && myCity === null ) {
			locationService.getCurrentLocation()
			.then((result) => {
				dispatch(setMyCityAction({myCity: result}));
			})
			.catch(error => {
				dispatch(setMyCityAction({myCity: null}));
				console.log(error)
				//if message === User denied Geolocation show error notification for client!
				//user has denied access to location data - message
			});
		};
	}, []);

	//проверка дня из url и назначение данных в currentWeather
	useEffect(() => {
		if (weatherAllDays !== null && day !== undefined) {
			weatherAllDays.find(item => {
				if (compareDates(item.date, day)) {
					dispatch(setWeatherCurrentDayAction({weather: item}));
				};
			});
		} else if (weatherAllDays !== null) {
			dispatch(setWeatherCurrentDayAction({weather: weatherAllDays[0]}));
		};
	}, [day, weatherAllDays]);

	useEffect(() => {
		if (myCity !== null) {
			dispatch(setWeatherLoadingAction({loading: true}));

			weatherApi.getWeather(myCity, myLanguage)
				.then((response) => {
					dispatch(setWeatherAllDaysAction({weather: response}));
					dispatch(setWeatherLoadingAction({loading: false}));
				})
				.catch((error) => {
					dispatch(setWeatherError({error: error.toString()}));
					dispatch(setWeatherLoadingAction({loading: false}));
				});
		} else {
			// console.log('something');
			//do something.... without location
			//show modal for choise city
		}
	}, [myCity]);

	return (
		<>
			<WeatherApplication/>
			<WeatherFullInfo/>
		</>
	);
};

export default WeatherAppWrap;
