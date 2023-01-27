import { Routes, Route } from 'react-router-dom';
//components
import WeatherApp from '../../applications/weather-app/weather-app';
// import WeatherAppRoot from '../../applications/weather-app/weather-app-root';
import WeatherChangeLocation from '../../applications/weather-app/components/change-location/weather-change-location';
//constants
import { AppTitles } from '../../variables/text';
//styles
import './weather-app.page.scss';

const WeatherAppPage = (): JSX.Element => {

	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos: any) {
		const crd = pos.coords;

		console.log('Your current position is:');
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
	}

	function error(err: any) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	navigator.geolocation.getCurrentPosition(success, error, options);

	return (
		<div>
			<h1 className='visually-hidden'>{AppTitles.WEATHER_PAGE_TITLE}</h1>
			<main className='weather-app-page'>
				{/* <WeatherAppRoot/> */}

				<Routes>
					<Route path='/:location?/:day?' element={<WeatherApp/>}/>
					<Route path='/change-location' element={<WeatherChangeLocation/>}/>
				</Routes>
			</main>
		</div>
	);
};

export default WeatherAppPage;
