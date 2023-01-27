import { Routes, Route } from 'react-router-dom';
//pages
import { WeatherAppLocationPage, WeatherAppPage } from './pages';
//variables
import { WeatherAppRoute } from './variables/weather-app-routes';
import './variables/weather-app-variables.css';

const WeatherApp = (): JSX.Element => {
	return (
		<Routes>
			<Route path={WeatherAppRoute.WEATHER_APP_PAGE} element={<WeatherAppPage/>}/>
			<Route path={WeatherAppRoute.WEATHER_APP_LOCATION_PAGE} element={<WeatherAppLocationPage/>}/>
		</Routes>
	);
};

export default WeatherApp;
