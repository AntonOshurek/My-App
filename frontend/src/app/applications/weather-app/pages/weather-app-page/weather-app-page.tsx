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
//types
import { IAdaptedWeatherLocationDataType, IAdaptedCurrentWeatherDataType, IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
import { IAllWeatherDataType } from '../../types/weather-data-types';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const {location, day} = useParams();

	const [currentLocation, setCurrentLocation] = useState<string>('');
	const [daysWeather, setDaysWeather] = useState<IAdaptedOneDayDataType[] | null>(null);
	const [currentWeather, setCurrentWeather] = useState<IAdaptedCurrentWeatherDataType | null>(null);
	const [weatherLocation, setWeatherLocation] = useState<IAdaptedWeatherLocationDataType | null>(null);

	useEffect(() => {
		if(location || location?.length) {
			setCurrentLocation(location);
		} else {
			locationService.getCurrentLocation()
			.then((result) => {
				setCurrentLocation(result);
			})
			.catch(error => {
				console.log(error.message);
				//if message === User denied Geolocation show error notification for client!
				//user has denied access to location data - message
			});
		};
	}, []);

	const setDataToState = (data: IAllWeatherDataType) => {
		const daysWeather: IAdaptedOneDayDataType[] = [];

		data.forecast.forecastday.map((dayWeather) => {
			daysWeather.push(weatherDataAdapter.createForecastDayAdapter(dayWeather));
		});

		setDaysWeather(daysWeather);
		setCurrentWeather(weatherDataAdapter.createCurrentWeatherDataAdapter(data.current));
		setWeatherLocation(weatherDataAdapter.createLocationWeatherDataAdapter(data.location));
	};

	useEffect(() => {
		if(currentLocation || currentLocation.length) {
			const weatherApiConfiguration = {
				days: 3,
				city: replaceNonEnglish(currentLocation),
				lang: 'ru',
			};

			weatherApi.getWeather(weatherApiConfiguration)
			.then((response) => {
				setDataToState(response);
			})
			.catch((error) => {
				if(error.message.search('City error') >= 0) {
					console.log('City error');
				} else {
					console.log('somthing wrong...');
				};
			});
		};
	}, [currentLocation]);


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
					/>

				</section>

			</main>
		</div>
	);
};

export default WeatherAppPage;
