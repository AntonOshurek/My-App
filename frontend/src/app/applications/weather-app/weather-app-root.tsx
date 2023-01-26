import { Routes, Route } from 'react-router-dom';
//components
import WeatherApp from './weather-app';
import WeatherChangeLocation from './components/change-location/weather-change-location';

const WeatherAppRoot = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/:location?/:day?' element={<WeatherApp/>}/>
			<Route path='/change-location' element={<WeatherChangeLocation/>}/>
		</Routes>
	);
};

export default WeatherAppRoot;
