//types
import { IAdaptedDataForCurrentWeatherType } from '../../types/weather-adapted-data-types';
//styles
import './weather-additional.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedDataForCurrentWeatherType | null,
};

const WeatherAdditional = ({currentWeather}: IWeatherControlsPropsType): JSX.Element => {

	// console.log(currentWeather);

	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className='weather-additional__info-subject'>PRECIPITATION</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.current.precipIn} mm</dd>

				<dt className='weather-additional__info-subject'>HUMIDITY</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.current.humidity} %</dd>

				<dt className='weather-additional__info-subject'>WIND</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.current.windKPH} km/h</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
