import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//components
import { CurrentWeather, WeatherControls } from '../../components/';
//api
import weatherApi from '../../weather-api/weather-api';
//services
import locationService from '../../services/location-service';
//types
import { IGetWeatherConfigurationType } from '../../types/weather-app-types';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const {location, day} = useParams();

	const [currentLocation, setCurrentLocation] = useState<string>('');

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
		}
	}, []);

	useEffect(() => {
		console.log(currentLocation);

		if(currentLocation || currentLocation.length) {

			weatherApi.getWeather({
				days: 3,
				city: locationService.replaceNonEnglish(currentLocation),
				lang: 'ru',
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				if(error.message.search('City error') >= 0) {
					console.log('City error')
				} else {
					console.log('somthing wrong...')
				}
			});
		};
	}, [currentLocation]);

	return (
		<div className='weather-app-page'>
			<h1 className='visually-hidden'>title</h1>

			<main className='weather-app-page__main'>

				<section className='weather-app-page__application container'>
					<h2 className='visually-hidden'>Weather</h2>
					<CurrentWeather/>
					<WeatherControls/>
				</section>

			</main>
		</div>
	);
};

export default WeatherAppPage;
