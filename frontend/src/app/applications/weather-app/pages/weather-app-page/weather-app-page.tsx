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

	function replaceNonEnglish(str: string) {
		const latinLettersMap : { [key: string]: string } = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
			'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
			'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts',
			'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu',
			'я': 'ya',
			// Polish
			'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z',
			'ż': 'z',
			// Ukrainian
			'ґ': 'g', 'є': 'ye', 'і': 'i', 'ї': 'yi',
		};
		let result = '';
		for (let i = 0; i < str.length; i++) {
			const char = str[i].toLowerCase();
			result += latinLettersMap[char] || char;
		}
		return result;
	}

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

			console.log(currentLocation);
			console.log(replaceNonEnglish(currentLocation))

			weatherApi.getWeather({
				days: 3,
				city: replaceNonEnglish(currentLocation),
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
