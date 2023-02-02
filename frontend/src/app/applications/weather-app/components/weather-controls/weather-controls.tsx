import { Link } from 'react-router-dom';
//components
import { WeatherAdditional, WeatherDays } from '../';
//types
import { IAdaptedDataForCurrentWeatherType } from '../../types/weather-adapted-data-types';
//styles
import './weather-controls.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedDataForCurrentWeatherType | null,
};

const WeatherControls = ({currentWeather}: IWeatherControlsPropsType): JSX.Element => {
	return (
		<div className='weather-controls'>
			<WeatherAdditional currentWeather={currentWeather}/>

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
