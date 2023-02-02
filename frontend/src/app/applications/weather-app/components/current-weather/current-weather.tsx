//services
import { formatDate, getWeekday } from '../../services/date-service';
//types
import { IAdaptedDataForCurrentWeatherType } from '../../types/weather-adapted-data-types';
//styles
import './current-weather.scss';

interface ICurrentWeatherPropsType {
	currentWeather: IAdaptedDataForCurrentWeatherType | null,
}

const CurrentWeather = ({currentWeather}: ICurrentWeatherPropsType): JSX.Element => {

	return (
		<article className='current-weather'>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={currentWeather?.location.localtime}>
					<span className='current-weather__date-text current-weather__date-text--day'>{getWeekday(currentWeather?.location.localtime)}</span>
					<span className='current-weather__date-text'>{formatDate(currentWeather?.location.localtime)}</span>
				</time>

				<p className='current-weather__city'>{currentWeather?.location.name}</p>

				<img className='current-weather__image' src={currentWeather?.current.conditionIcon} alt={currentWeather?.current.condition}/>

				<p className='current-weather__temperature'>{currentWeather?.current.temperatureC}°C</p>
				<p className='current-weather__temperature-info'>{currentWeather?.current.condition}</p>
			</div>
		</article>
	);
};

export default CurrentWeather;
