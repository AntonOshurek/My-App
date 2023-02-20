import { Link } from 'react-router-dom';
//components
import { WeatherAdditional, WeatherDays } from '../';
//variables
import { WeatherAppRoute } from '../../variables/weather-app-routes';
//types
import type {
	AdaptedDaysDataType,
	IAdaptedOneDayDataType,
} from '../../types/weather-adapted-data-types';
//styles
import './weather-controls.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
	daysWeather : AdaptedDaysDataType | null,
};

const WeatherControls = ({ currentWeather, daysWeather }: IWeatherControlsPropsType): JSX.Element => {

	return (
		<div className='weather-controls'>
			<WeatherAdditional currentWeather={currentWeather}/>

			<WeatherDays daysWeather={daysWeather ? daysWeather : null}/>

			<Link
				className='weather-controls__change-location-link'
				to={`../${WeatherAppRoute.WEATHER_APP_LOCATION_PAGE}`}>
					Change location
			</Link>
		</div>
	);
};

export default WeatherControls;
