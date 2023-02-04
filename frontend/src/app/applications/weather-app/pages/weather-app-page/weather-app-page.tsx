import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { CurrentWeather, WeatherControls } from '../../components/';
//api
import weatherApi from '../../weather-api/weather-api';
//services
import locationService from '../../services/location-service';
//adapters for data
import weatherDataAdapter from '../../services/weather-data-adapter';
//utils
import { replaceNonEnglish } from '../../../../generic-utils/utils/replaceNonEnglish';
//store
import { useAppDispatch, useAppSelector } from '../../../../generic-utils/hooks/hooks';
import { setMyCityAction } from '../../../../store/slices/app-slice';
import { SelectorGetMyCityState } from '../../../../store/selectors/selectors';
//types
import {
	IAdaptedWeatherLocationDataType,
	IAdaptedCurrentWeatherDataType,
	AdaptedDaysDataType
} from '../../types/weather-adapted-data-types';
import { IAllWeatherDataType } from '../../types/weather-data-types';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const {location, day} = useParams();

	const myCity = useAppSelector(SelectorGetMyCityState);


	const [daysWeather, setDaysWeather] = useState<AdaptedDaysDataType | null>(null);
	const [currentWeather, setCurrentWeather] = useState<IAdaptedCurrentWeatherDataType | null>(null);
	const [weatherLocation, setWeatherLocation] = useState<IAdaptedWeatherLocationDataType | null>(null);


	// dispatch(setMyCityAction({myCity: 'grodno'}));


	useEffect(() => {
		if(location || location?.length) {
			dispatch(setMyCityAction({myCity: location}));
		} else {
			locationService.getCurrentLocation()
			.then((result) => {
				dispatch(setMyCityAction({myCity: result}));
			})
			.catch(error => {
				console.log(error.message);
				//if message === User denied Geolocation show error notification for client!
				//user has denied access to location data - message
			});
		};
	}, [location]);

	useEffect(() => {
		console.log(myCity);
	}, [myCity]);


	// const setDataToState = (data: IAllWeatherDataType) => {
	// 	const daysWeather: AdaptedDaysDataType = [];

	// 	data.forecast.forecastday.map((dayWeather) => {
	// 		daysWeather.push(weatherDataAdapter.createForecastDayAdapter(dayWeather));
	// 	});

	// 	setDaysWeather(daysWeather);
	// 	setCurrentWeather(weatherDataAdapter.createCurrentWeatherDataAdapter(data.current));
	// 	setWeatherLocation(weatherDataAdapter.createLocationWeatherDataAdapter(data.location));
	// };

	// useEffect(() => {
	// 	if(myCity || myCity.length) {
	// 		const weatherApiConfiguration = {
	// 			days: 3,
	// 			city: replaceNonEnglish(myCity),
	// 			lang: 'ru',
	// 		};

	// 		weatherApi.getWeather(weatherApiConfiguration)
	// 		.then((response) => {
	// 			setDataToState(response);
	// 		})
	// 		.catch((error) => {
	// 			if(error.message.search('City error') >= 0) {
	// 				console.log('City error');
	// 			} else {
	// 				console.log('somthing wrong...');
	// 			};
	// 		});
	// 	};
	// }, [myCity]);


	return (
		<div className='weather-app-page'>
			<h1 className='visually-hidden'>title</h1>

			<main className='weather-app-page__main'>

				<section className='weather-app-page__application container'>
					<h2 className='visually-hidden'>Weather</h2>

					<CurrentWeather
						currentWeather={currentWeather ? currentWeather : null}
						weatherLocation={weatherLocation ? weatherLocation : null}
					/>
					<WeatherControls
						currentWeather={currentWeather ? currentWeather : null}
						daysWeather={daysWeather ? daysWeather : null}
					/>

				</section>

			</main>
		</div>
	);
};

export default WeatherAppPage;
