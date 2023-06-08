import { Link } from 'react-router-dom';
//components
import { WeatherAdditional, WeatherDays } from '../';
//variables
import { WeatherAppRoute } from '../../variables/weather-app-routes';
//styles
import './weather-controls.scss';

const WeatherControls = (): JSX.Element => {
	return (
		<div className='weather-controls'>

			<WeatherAdditional/>
			<WeatherDays/>

			<Link
				className='weather-controls__change-location-link weather-button weather-button--main'
				to={`../${WeatherAppRoute.WEATHER_APP_LOCATION_PAGE}`}>
				Change location
			</Link>
		</div>
	);
};

export default WeatherControls;
