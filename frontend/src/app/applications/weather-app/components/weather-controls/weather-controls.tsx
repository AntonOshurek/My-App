import { Link } from 'react-router-dom';
//components
import { WeatherAdditional, WeatherDays } from '../';
//variables
import { AppRoute } from '../../../../variables/app-routes';
//styles
import './weather-controls.scss';

const WeatherControls = (): JSX.Element => {
	return (
		<div className='weather-controls'>

			<WeatherAdditional/>
			<WeatherDays/>

			<Link
				className='weather-controls__change-location-link weather-button weather-button--main'
				to={`${AppRoute.CHANGE_LOCATION}`}>
				Change location
			</Link>
		</div>
	);
};

export default WeatherControls;
