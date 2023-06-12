//utils
import { getTimeFromString } from '../../../../../generic-utils/utils/date-utils';
import { generateTemperatureColor } from '../../../generic-utils/generate-temperature-color';
import { generateWindColor } from '../../../generic-utils/generate-wind-color';
import { convertWindKmhToMs } from '../../../generic-utils/convert-wind-kmh-to-ms';
//types
import type { IWeatherHourDataType } from '../../../types/weather-data-types';
//styles
import './weather-full-info-item.scss';

//https://fontawesome.com/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf, faTint, faWind } from '@fortawesome/free-solid-svg-icons'

interface IWeatherFullInfoItemPropsType {
	hourWeather: IWeatherHourDataType;
};

const WeatherFullInfoItem = ({ hourWeather }: IWeatherFullInfoItemPropsType): JSX.Element => {
	const temperatureColor = generateTemperatureColor(+hourWeather.tempC);
	const windColor: string = generateWindColor(convertWindKmhToMs(hourWeather.windKph))

	return (
		<li className='weather-full-info__item'>
			<article className='weather-full-info__day-article'>
				<h3 className='visually-hidden'>info for hour</h3>

				<p className='weather-full-info__header'>
					<time className='weather-full-info__text' dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
					<img className='weather-full-info__weather-image' src={hourWeather.condition.icon} width='50' height='50' alt={hourWeather.condition.text} />
				</p>

				<h4 className='visually-hidden'>Осадки:</h4>
				<p className='weather-full-info__point'>
					<FontAwesomeIcon className="weather-full-info__white-icon" icon={faTint} />
					<span className='weather-full-info__data'>{hourWeather.precipMm} Mm</span>
				</p>

				<h4 className='visually-hidden'>Температура:</h4>
				<p className='weather-full-info__point' style={{ backgroundColor: temperatureColor }}>
					<FontAwesomeIcon icon={faThermometerHalf} />
					<span className='weather-full-info__data weather-full-info__data--dark'>{hourWeather.tempC}°C</span>
				</p>

				<h4 className='visually-hidden'>Ветер:</h4>
				<p className='weather-full-info__point' style={{ backgroundColor: windColor }}>
					<FontAwesomeIcon icon={faWind} />
					<span className='weather-full-info__data weather-full-info__data--dark'>{convertWindKmhToMs(hourWeather.windKph)}м/с</span>
				</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
