//types
import { IAdaptedWeatherHourDataType } from '../../../types/weather-adapted-data-types';
//utils
import { getTimeFromString } from '../../../../../generic-utils/utils/date-utils';
//styles
import './weather-full-info-item.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faSnowflake, faUmbrella, faCloud, faThermometerHalf, faTint, faWind, faEye  } from '@fortawesome/free-solid-svg-icons'

interface IWeatherFullInfoItemPropsType {
	hourWeather: IAdaptedWeatherHourDataType;
}

const WeatherFullInfoItem = ({hourWeather}: IWeatherFullInfoItemPropsType): JSX.Element => {

	// console.log(hourWeather)

	return (
		<li className='weather-full-info__item'>
			<article className='weather-full-info__day-article'>


				{/* <h3 className='weather-full-info__day-hour'></h3> */}
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
					<FontAwesomeIcon icon={faCloudRain} />
					Вероятность дождя:
					<span className='weather-full-info__data'>{hourWeather.chanceOfRain}</span>
				</p>
				<p className='weather-full-info__text'>
				<FontAwesomeIcon icon={faCloudRain} />
					Будет ли дождь:
					<span className='weather-full-info__data'>{hourWeather.willItRain ? 'Yes' : 'No'}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faSnowflake} />
					Вероятность снега:
					<span className='weather-full-info__data'>{hourWeather.chanceOfSnow}</span>
				</p>
				<p className='weather-full-info__text'>
				<FontAwesomeIcon icon={faSnowflake} />
				Будет ли снег:
					<span className='weather-full-info__data'>{hourWeather.willItSnow ? 'Yes' : 'No'}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faCloud} />
					Облачность:
					<span className='weather-full-info__data'>{hourWeather.cloud}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Dewpoint C:
					<span className='weather-full-info__data'>{hourWeather.dewpointC}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					По ощущениям C:
					<span className='weather-full-info__data'>{hourWeather.feelslikeC}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Порыв км/ч:
					<span className='weather-full-info__data'>{hourWeather.gustKph}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Тепловой индекс C:
					<span className='weather-full-info__data'>{hourWeather.heatindexC}</span>
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

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Давление Mb:
					<span className='weather-full-info__data'>{hourWeather.pressureMb}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faThermometerHalf} />
					Температура  C:
					<span className='weather-full-info__data'>{hourWeather.tempC}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faUmbrella} />
					Индекс УФ:
					<span className='weather-full-info__data'>{hourWeather.uv}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faEye} />
					Видимость км:
					<span className='weather-full-info__data'>{hourWeather.visKm}</span>
				</p>


				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faWind} />
					Направление ветра:
					<span className='weather-full-info__data'>{hourWeather.windDir}</span>
				</p>
				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faWind} />
					Ветер км/ч:
					<span className='weather-full-info__data'>{hourWeather.windKph}</span>
				</p>

				<p className='weather-full-info__text'>
					<FontAwesomeIcon icon={faWind} />
					Ощущаемая температура ветра:
					<span className='weather-full-info__data'>{hourWeather.windchillC}</span>
				</p>


			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
