import { Routes, Route } from 'react-router-dom';
//pages
import { WeatherAppLocationPage, WeatherAppPage } from './pages';
//variables
import './variables/weather-app-variables.css';

const WeatherApp = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/:location?/:day?' element={<WeatherAppPage/>}/>
			<Route path='/change-location' element={<WeatherAppLocationPage/>}/>
		</Routes>
	);
};

export default WeatherApp;
