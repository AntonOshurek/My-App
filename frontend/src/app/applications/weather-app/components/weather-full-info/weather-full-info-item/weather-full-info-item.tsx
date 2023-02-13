//types
import { IAdaptedWeatherHourDataType } from '../../../types/weather-adapted-data-types';
//utils
import { getTimeFromString } from '../../../../../generic-utils/utils/date-utils';
//styles
import './weather-full-info-item.scss';

interface IWeatherFullInfoItemPropsType {
	hourWeather: IAdaptedWeatherHourDataType;
}

const WeatherFullInfoItem = ({hourWeather}: IWeatherFullInfoItemPropsType): JSX.Element => {

	return (
		<li className='weather-full-info__item'>
			<article className='weather-full-info__day-article'>
				{/* <h3 className='weather-full-info__day-hour'></h3> */}
				<p>
					<time dateTime={hourWeather.time}>{getTimeFromString(hourWeather.time)}</time>
				</p>

				<p className='weather-full-info__text'>Chance of Rain: <span className='weather-full-infi__data'>{hourWeather.chanceOfRain}</span></p>
				<p className='weather-full-info__text'>Chance of Snow: <span className='weather-full-infi__data'>{hourWeather.chanceOfSnow}</span></p>
				<p className='weather-full-info__text'>Cloud: <span className='weather-full-infi__data'>{hourWeather.cloud}</span></p>
				<p className='weather-full-info__text'>Condition: <span className='weather-full-infi__data'>{hourWeather.condition.text}</span></p>
				<p className='weather-full-info__text'>Dewpoint C: <span className='weather-full-infi__data'>{hourWeather.dewpointC}</span></p>
				<p className='weather-full-info__text'>Dewpoint F: <span className='weather-full-infi__data'>{hourWeather.dewpointF}</span></p>
				<p className='weather-full-info__text'>Feelslike C: <span className='weather-full-infi__data'>{hourWeather.feelslikeC}</span></p>
				<p className='weather-full-info__text'>Feelslike F: <span className='weather-full-infi__data'>{hourWeather.feelslikeF}</span></p>
				<p className='weather-full-info__text'>Gust Kph: <span className='weather-full-infi__data'>{hourWeather.gustKph}</span></p>
				<p className='weather-full-info__text'>Gust Mph: <span className='weather-full-infi__data'>{hourWeather.gustMph}</span></p>
				<p className='weather-full-info__text'>Heatindex C: <span className='weather-full-infi__data'>{hourWeather.heatindexC}</span></p>
				<p className='weather-full-info__text'>Heatindex F: <span className='weather-full-infi__data'>{hourWeather.heatindexF}</span></p>
				<p className='weather-full-info__text'>Humidity: <span className='weather-full-infi__data'>{hourWeather.humidity}</span></p>
				<p className='weather-full-info__text'>Is Day: <span className='weather-full-infi__data'>{hourWeather.isDay ? 'Yes' : 'No'}</span></p>
				<p className='weather-full-info__text'>Precip In: <span className='weather-full-infi__data'>{hourWeather.precipIn}</span></p>
				<p className='weather-full-info__text'>Precip Mm: <span className='weather-full-infi__data'>{hourWeather.precipMm}</span></p>
				<p className='weather-full-info__text'>Pressure In: <span className='weather-full-infi__data'>{hourWeather.pressureIn}</span></p>
				<p className='weather-full-info__text'>Pressure Mb: <span className='weather-full-infi__data'>{hourWeather.pressureMb}</span></p>
				<p className='weather-full-info__text'>Temp C: <span className='weather-full-infi__data'>{hourWeather.tempC}</span></p>
				<p className='weather-full-info__text'>Temp F: <span className='weather-full-infi__data'>{hourWeather.tempF}</span></p>
				<p className='weather-full-info__text'>Time: <span className='weather-full-infi__data'>{hourWeather.time}</span></p>
				<p className='weather-full-info__text'>Time Epoch: <span className='weather-full-infi__data'>{hourWeather.timeEpoch}</span></p>
				<p className='weather-full-info__text'>UV: <span className='weather-full-infi__data'>{hourWeather.uv}</span></p>
				<p className='weather-full-info__text'>Vis Km: <span className='weather-full-infi__data'>{hourWeather.visKm}</span></p>
				<p className='weather-full-info__text'>Vis Miles: <span className='weather-full-infi__data'>{hourWeather.visMiles}</span></p>
				<p className='weather-full-info__text'>Will it Rain: <span className='weather-full-infi__data'>{hourWeather.willItRain ? 'Yes' : 'No'}</span></p>
				<p className='weather-full-info__text'>Will it Snow: <span className='weather-full-infi__data'>{hourWeather.willItSnow ? 'Yes' : 'No'}</span></p>
				<p className='weather-full-info__text'>Wind Degree: <span className='weather-full-infi__data'>{hourWeather.windDegree}</span></p>
				<p className='weather-full-info__text'>Wind Dir: <span className='weather-full-infi__data'>{hourWeather.windDir}</span></p>
				<p className='weather-full-info__text'>Wind Kph: <span className='weather-full-infi__data'>{hourWeather.windKph}</span></p>
				<p className='weather-full-info__text'>Wind Mph: <span className='weather-full-infi__data'>{hourWeather.windMph}</span></p>
				<p className='weather-full-info__text'>Windchill C: <span className='weather-full-infi__data'>{hourWeather.windchillC}</span></p>
				<p className='weather-full-info__text'>Windchill F: <span className='weather-full-infi__data'>{hourWeather.windchillF}</span></p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
