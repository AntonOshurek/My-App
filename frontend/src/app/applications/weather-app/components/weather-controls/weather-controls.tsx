import { Link } from 'react-router-dom';
//components
import { WeatherAdditional, WeatherDays } from '../';
//styles
import './weather-controls.scss';

const WeatherControls = (): JSX.Element => {
	return (
		<div className='weather-controls'>
			<WeatherAdditional/>

			<WeatherDays/>

			<Link
				className='weather-controls__change-location-link'
				to='../change-location'>
					Change location
			</Link>
		</div>
	);
};

export default WeatherControls;
