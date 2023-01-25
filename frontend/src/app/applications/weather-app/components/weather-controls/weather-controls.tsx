//components
import { WeatherAdditional, WeatherDays } from '../';
//styles
import './weather-controls.scss';

const WeatherControls = (): JSX.Element => {
	return (
		<div className='weather-controls'>
			<WeatherAdditional/>

			<WeatherDays/>

			<button className='weather-controls__change-location-button' type='button'>Change location</button>
		</div>
	);
};

export default WeatherControls;
