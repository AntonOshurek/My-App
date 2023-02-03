//services
import { formatDate, getWeekday } from '../../services/date-service';
//types
import { IAdaptedCurrentWeatherDataType, IAdaptedWeatherLocationDataType } from '../../types/weather-adapted-data-types';
//styles
import './current-weather.scss';

interface ICurrentWeatherPropsType {
	currentWeather: IAdaptedCurrentWeatherDataType | null,
	weatherLocation: IAdaptedWeatherLocationDataType | null,
}

const CurrentWeather = ({currentWeather, weatherLocation}: ICurrentWeatherPropsType): JSX.Element => {

	return (
		<article className='current-weather'>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={weatherLocation?.localtime}>
					<span className='current-weather__date-text current-weather__date-text--day'>{getWeekday(weatherLocation?.localtime)}</span>
					<span className='current-weather__date-text'>{formatDate(weatherLocation?.localtime)}</span>
				</time>

				<p className='current-weather__city'>{weatherLocation?.name}</p>

				<img className='current-weather__image' src={currentWeather?.conditionIcon} alt={currentWeather?.condition}/>

				<p className='current-weather__temperature'>{currentWeather?.temperatureC}°C</p>
				<p className='current-weather__temperature-info'>{currentWeather?.condition}</p>
			</div>
		</article>
	);
};

export default CurrentWeather;
