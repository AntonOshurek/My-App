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

				<p className='weather-full-info__text'>
					<img src={hourWeather.condition.icon} alt="" />
					<time dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Состояние:
					<span className='weather-full-info__data'>{hourWeather.condition.text}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faTint} />
					Влажность:
					<span className='weather-full-info__data'>{hourWeather.humidity}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faTint} />
					Осадки Mm:
					<span className='weather-full-info__data'>{hourWeather.precipMm}</span>
				</p>

				<p className='weather-full-info__text weather-full-info__text--black' style={{ backgroundColor:tempBgColor }}>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Температура  C:
					<span className='weather-full-info__data weather-full-info__data--black'>{hourWeather.tempC}</span>
				</p>

				<p className='weather-full-info__text weather-full-info__text--black' style={{ backgroundColor }}>
					<FontAwesomeIcon icon={faWind} />
					Ветер м/с:
					<span className='weather-full-info__data weather-full-info__data--black'>{Math.round(hourWeather.windKph)}</span>
				</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
