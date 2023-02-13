import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { CurrentWeather, WeatherControls, WeatherFullInfo } from '../../components/';
//api
import weatherApi from '../../api/weather-api';
//services
import locationService from '../../services/location-service';
//adapters for data
import weatherDataAdapter from '../../services/weather-data-adapter';
//utils
import { replaceNonEnglish } from '../../../../generic-utils/utils/replaceNonEnglish';
import { compareDates } from '../../../../generic-utils/utils/date-utils';
//store
import { useAppDispatch, useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { SelectorGetMyCityState } from '../../../../store/selectors/selectors';
import { setMyCityAction } from '../../../../store/slices/app-slice';
//types
import {
	AdaptedDaysDataType,
	IAdaptedOneDayDataType,
} from '../../types/weather-adapted-data-types';
import { IAllWeatherDataType } from '../../types/weather-data-types';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const myCity = useAppSelector(SelectorGetMyCityState);

	const {location, day} = useParams();

	const [daysWeather, setDaysWeather] = useState<AdaptedDaysDataType | null>(null);
	const [currentWeather, setCurrentWeather] = useState<IAdaptedOneDayDataType | null>(null);

	const setDataToState = (data: IAllWeatherDataType) => {
		const days: AdaptedDaysDataType = [];

		data.forecast.forecastday.map((dayWeather) => {
			days.push(weatherDataAdapter.createForecastDayAdapter(dayWeather));
		});

		setDaysWeather(days);
	};

	useEffect(() => {
		if((location && location.length !== 0) && (location !== myCity)) {

			dispatch(setMyCityAction({myCity: location}));

		} else if (!location && !myCity) {
			// console.log('else if (!location && !myCity)')
			locationService.getCurrentLocation()
			.then((result) => {
				dispatch(setMyCityAction({myCity: result}));
			})
			.catch(error => {
				dispatch(setMyCityAction({myCity: ''}));
				console.log(error)
				//if message === User denied Geolocation show error notification for client!
				//user has denied access to location data - message
			});

		};
	}, []);

	//проверка дня из url и назначение данных в currentWeather
	useEffect(() => {
		if(daysWeather && day && day.length !== 0) {
			daysWeather.map(item => {
				if(compareDates(item.date, day)) {
					setCurrentWeather(item);
				};
			});
		} else if(daysWeather) {
			setCurrentWeather(daysWeather[0]);
		};
	}, [day, daysWeather]);

	useEffect(() => {
		if(myCity || myCity.length) {

			const weatherApiConfiguration = {
				days: 3,
				city: replaceNonEnglish(myCity),
				lang: 'ru',
			};

			weatherApi.getWeather(weatherApiConfiguration)
			.then((response) => {
				setDataToState(response);
			})
			.catch((error) => {
				if(error instanceof Error) {
					if(error.message.search('City error') >= 0) {
						console.log(error.message);
					}
				} else {
					console.log('somthing wrong...');
				};
			});
		} else {
			//do something.... without location
		}
	}, [myCity]);


	return (
		<div className='weather-app-page'>
			<h1 className='visually-hidden'>title</h1>

			<main className='weather-app-page__main'>

				<section className='weather-app-page__application container'>
					<h2 className='visually-hidden'>Weather</h2>

					<CurrentWeather
						currentWeather={currentWeather ? currentWeather : null}
					/>
					<WeatherControls
						currentWeather={currentWeather ? currentWeather : null}
						daysWeather={daysWeather ? daysWeather : null}
					/>

				</section>

				<WeatherFullInfo
					currentWeather={currentWeather ? currentWeather : null}
				/>

			</main>
		</div>
	);
};

export default WeatherAppPage;
