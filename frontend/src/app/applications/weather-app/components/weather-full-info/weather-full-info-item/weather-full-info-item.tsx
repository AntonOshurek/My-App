//types
import { IAdaptedWeatherHourDataType } from '../../../types/weather-adapted-data-types';
//utils
import { getTimeFromString } from '../../../../../generic-utils/utils/date-utils';
import { generateTemperatureColor } from '../../../generic-utils/generate-temperature-color';
import { generateWindColor } from '../../../generic-utils/generate-wind-color';
import { convertWindKmhToMs } from '../../../generic-utils/convert-wind-kmh-to-ms';
//styles
import './weather-full-info-item.scss';

//https://fontawesome.com/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf, faTint, faWind  } from '@fortawesome/free-solid-svg-icons'

interface IWeatherFullInfoItemPropsType {
	hourWeather: IAdaptedWeatherHourDataType;
}

const WeatherFullInfoItem = ({hourWeather}: IWeatherFullInfoItemPropsType): JSX.Element => {

	const tempBgColor = generateTemperatureColor(+hourWeather.tempC);
	const backgroundColor : string = generateWindColor(convertWindKmhToMs(hourWeather.windKph))

	return (
		<li className='weather-full-info__item'>
			<article className='weather-full-info__day-article'>

				<p className='weather-full-info__header'>
					<img className='weather-full-info__weather-image' src={hourWeather.condition.icon} alt="" />
					<time className='weather-full-info__text' dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
					<span className='weather-full-info__text'>{hourWeather.condition.text}</span>
				</p>

				<p className='weather-full-info__point'>
					<span className='weather-full-info__text weather-full-info__point-text'>
						<FontAwesomeIcon icon={faTint} />
						Влажность:
					</span>
					<span className='weather-full-info__data'>{hourWeather.humidity}</span>
				</p>

				<p className='weather-full-info__point'>
					<span className='weather-full-info__text weather-full-info__point-text'>
						<FontAwesomeIcon icon={faTint} />
						Осадки Mm:
					</span>
					<span className='weather-full-info__data'>{hourWeather.precipMm}</span>
				</p>

				<p className='weather-full-info__point' style={{ backgroundColor:tempBgColor }}>
					<span className='weather-full-info__text weather-full-info__point-text weather-full-info__text--dark'>
						<FontAwesomeIcon icon={faThermometerHalf} />
						Температура  C:
					</span>
					<span className='weather-full-info__data weather-full-info__data--dark'>{hourWeather.tempC}</span>
				</p>

				<p className='weather-full-info__point' style={{ backgroundColor }}>
					<span className='weather-full-info__text weather-full-info__point-text weather-full-info__text--dark'>
						<FontAwesomeIcon icon={faWind} />
						Ветер м/с:
					</span>
					<span className='weather-full-info__data weather-full-info__data--dark'>{Math.round(hourWeather.windKph)}</span>
				</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
