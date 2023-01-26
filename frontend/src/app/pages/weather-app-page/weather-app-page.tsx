//components
import WeatherApp from '../../applications/weather-app/weather-app';
//constants
import { AppTitles } from '../../variables/text';
//styles
import './weather-app.page.scss';

const WeatherAppPage = (): JSX.Element => {

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
		<div>
			<h1 className='visually-hidden'>{AppTitles.WEATHER_PAGE_TITLE}</h1>
			<main className='weather-app-page'>
				<WeatherApp/>
			</main>
		</div>
	);
};

export default WeatherAppPage;
