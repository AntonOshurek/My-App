//styles
import './current-weather.scss';

import { IAdaptedDataForCurrentWeatherType } from '../../types/weather-adapted-data-types';

interface ICurrentWeatherPropsType {
	currentWeather: IAdaptedDataForCurrentWeatherType | null,
}

const CurrentWeather = ({currentWeather}: ICurrentWeatherPropsType): JSX.Element => {

	console.log(currentWeather);

	return (
		<article className='current-weather'>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={currentWeather?.location.localtime}>
					<span className='current-weather__date-text current-weather__date-text--day'>Tuesday</span>
					<span className='current-weather__date-text'>15 Jan 2019</span>
				</time>

				<p className='current-weather__city'>{currentWeather?.location.name}</p>

				<span className='current-weather__image'>{currentWeather?.location.region}</span>

				<p className='current-weather__temperature'>{currentWeather?.current.temperatureC}°C</p>
				<p className='current-weather__temperature-info'>{currentWeather?.current.condition}</p>
			</div>
		</article>
	);
};

export default CurrentWeather;
