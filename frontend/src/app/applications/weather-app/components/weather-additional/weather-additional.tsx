//types
import { IAdaptedOneDayDataType } from '../../types/weather-adapted-data-types';
//styles
import './weather-additional.scss';

interface IWeatherControlsPropsType {
	currentWeather: IAdaptedOneDayDataType | null,
};

const WeatherAdditional = ({ currentWeather }: IWeatherControlsPropsType): JSX.Element => {
	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className='weather-additional__info-subject'>Осадки</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.day.totalPrecipMm} mm</dd>

				<dt className='weather-additional__info-subject'>Влажность</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.day.avgHumidity} %</dd>

				<dt className='weather-additional__info-subject'>Ветер</dt>
				<dd className='weather-additional__info-content'>{currentWeather?.day.maxWindKph} km/h</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
