import { useParams } from 'react-router-dom';
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

	if(location) {
		const weatherConfiguration: IGetWeatherConfigurationType = {
			days: 3,
			city: location,
			lang: 'ru',
		};

		weatherApi.getWeather(weatherConfiguration)
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
	} else {
		locationService.getCurrentLocation()
		.then((result) => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
	}

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
