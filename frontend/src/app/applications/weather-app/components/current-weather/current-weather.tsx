//styles
import './current-weather.scss';

import { IAdaptedDataForCurrentWeatherType } from '../../types/weather-adapted-data-types';

interface ICurrentWeatherPropsType {
	currentWeather: IAdaptedDataForCurrentWeatherType | null,
}

const CurrentWeather = ({currentWeather}: ICurrentWeatherPropsType): JSX.Element => {

	console.log(currentWeather);

	function formatDate(dateStr: string | undefined) {
		if(dateStr) {
			const date = new Date(dateStr);
			const options: {[value: string]: string} = { year: "numeric", month: "short", day: "numeric" };
			return date.toLocaleDateString("en-US", options);
		} else {
			return '';
		}
	};

	function getWeekday(dateStr: string | undefined) {

		if(dateStr) {
			const date = new Date(dateStr);
			const options: {[value: string]: string} = { weekday: "long" };
			return date.toLocaleDateString("en-US", options);
		} else {
			return '';
		}
	}

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
