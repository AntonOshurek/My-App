//styles
import './current-weather.scss';

interface ICurrentWeatherPropsType {
	[name: string]: any
}

const CurrentWeather = ({currentWeather, location}: ICurrentWeatherPropsType): JSX.Element => {

	console.log(currentWeather);

	return (
		<article className='current-weather'>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime={currentWeather['last_updated']}>
					<span className='current-weather__date-text current-weather__date-text--day'>Tuesday</span>
					<span className='current-weather__date-text'>15 Jan 2019</span>
				</time>

				<p className='current-weather__city'>{location}</p>

				<span className='current-weather__image'></span>

				<p className='current-weather__temperature'>{currentWeather['temp_c']}°C</p>
				<p className='current-weather__temperature-info'>{currentWeather['condition'].text}</p>
			</div>
		</article>
	);
};

export default CurrentWeather;
