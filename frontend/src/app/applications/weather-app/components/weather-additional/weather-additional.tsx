//types
import { IAdaptedCurrentWeatherDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-additional.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedCurrentWeatherDataType | null,
};

const WeatherAdditional = ({currentWeather}: IWeatherControlsPropsType): JSX.Element => {

	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className='weather-additional__info-subject'>PRECIPITATION</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.precipIn} mm</dd>

				<dt className='weather-additional__info-subject'>HUMIDITY</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.humidity} %</dd>

				<dt className='weather-additional__info-subject'>WIND</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.windKPH} km/h</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
