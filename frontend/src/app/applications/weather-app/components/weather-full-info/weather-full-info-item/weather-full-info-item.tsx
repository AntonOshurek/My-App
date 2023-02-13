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

				<p>Chance of Rain: {hourWeather.chanceOfRain}</p>
				<p>Chance of Snow: {hourWeather.chanceOfSnow}</p>
				<p>Cloud: {hourWeather.cloud}</p>
				<p>Condition: {hourWeather.condition.text}</p>
				<p>Dewpoint C: {hourWeather.dewpointC}</p>
				<p>Dewpoint F: {hourWeather.dewpointF}</p>
				<p>Feelslike C: {hourWeather.feelslikeC}</p>
				<p>Feelslike F: {hourWeather.feelslikeF}</p>
				<p>Gust Kph: {hourWeather.gustKph}</p>
				<p>Gust Mph: {hourWeather.gustMph}</p>
				<p>Heatindex C: {hourWeather.heatindexC}</p>
				<p>Heatindex F: {hourWeather.heatindexF}</p>
				<p>Humidity: {hourWeather.humidity}</p>
				<p>Is Day: {hourWeather.isDay ? 'Yes' : 'No'}</p>
				<p>Precip In: {hourWeather.precipIn}</p>
				<p>Precip Mm: {hourWeather.precipMm}</p>
				<p>Pressure In: {hourWeather.pressureIn}</p>
				<p>Pressure Mb: {hourWeather.pressureMb}</p>
				<p>Temp C: {hourWeather.tempC}</p>
				<p>Temp F: {hourWeather.tempF}</p>
				<p>Time: {hourWeather.time}</p>
				<p>Time Epoch: {hourWeather.timeEpoch}</p>
				<p>UV: {hourWeather.uv}</p>
				<p>Vis Km: {hourWeather.visKm}</p>
				<p>Vis Miles: {hourWeather.visMiles}</p>
				<p>Will it Rain: {hourWeather.willItRain ? 'Yes' : 'No'}</p>
				<p>Will it Snow: {hourWeather.willItSnow ? 'Yes' : 'No'}</p>
				<p>Wind Degree: {hourWeather.windDegree}</p>
				<p>Wind Dir: {hourWeather.windDir}</p>
				<p>Wind Kph: {hourWeather.windKph}</p>
				<p>Wind Mph: {hourWeather.windMph}</p>
				<p>Windchill C: {hourWeather.windchillC}</p>
				<p>Windchill F: {hourWeather.windchillF}</p>

			</article>
		</li>
	);
};

export default WeatherFullInfoItem;
