import { useParams } from 'react-router-dom';
//components
import { CurrentWeather, WeatherControls } from '../../components/';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	const {location, day} = useParams();

	if(location && day) {
		console.log(location);
		console.log(day);
	}

	// const options = {
	// 	enableHighAccuracy: true,
	// 	timeout: 5000,
	// 	maximumAge: 0
	// };

	// function success(pos: any) {
	// 	const crd = pos.coords;

	// 	console.log('Your current position is:');
	// 	console.log(`Latitude : ${crd.latitude}`);
	// 	console.log(`Longitude: ${crd.longitude}`);
	// 	console.log(`More or less ${crd.accuracy} meters.`);
	// }

	// function error(err: any) {
	// 	console.warn(`ERROR(${err.code}): ${err.message}`);
	// }

	// navigator.geolocation.getCurrentPosition(success, error, options);

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