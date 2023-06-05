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

				<p className='weather-full-info__header'>
					<img className='weather-full-info__weather-image' src={hourWeather.condition.icon} width='50' height='50' alt="" />
					<time className='weather-full-info__text' dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
				</p>

				<p className='weather-full-info__point'>
					<span className='weather-full-info__text weather-full-info__point-text'>
						<FontAwesomeIcon icon={faTint} />
						Осадки:
					</span>
					<span className='weather-full-info__data'>{hourWeather.precipMm} Mm</span>
				</p>

				<p className='weather-full-info__point' style={{ backgroundColor: temperatureColor }}>
					<span className='weather-full-info__text weather-full-info__text--dark weather-full-info__point-text'>
						<FontAwesomeIcon icon={faThermometerHalf} />
						Температура:
					</span>
					<span className='weather-full-info__data weather-full-info__data--dark'>{hourWeather.tempC}°C</span>
				</p>

				<p className='weather-full-info__point' style={{ backgroundColor: windColor }}>
					<span className='weather-full-info__text weather-full-info__text--dark weather-full-info__point-text'>
						<FontAwesomeIcon icon={faWind} />
						Ветер:
					</span>
					<span className='weather-full-info__data weather-full-info__data--dark'>{convertWindKmhToMs(hourWeather.windKph)}м/с</span>
				</p>

				<p className='weather-full-info__point weather-full-info__text'>
					{hourWeather.condition.text}
				</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
