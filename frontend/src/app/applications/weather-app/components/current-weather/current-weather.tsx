//styles
import './current-weather.scss';

const CurrentWeather = (): JSX.Element => {
	return (
		<article className='current-weather'>
			<h3 className='visually-hidden'>Weather for tooday</h3>
			<div className='current-weather__wrap'>
				<time className='current-weather__date' dateTime="2019-01-15 20:00">
					<span className='current-weather__date-text current-weather__date-text--day'>Tuesday</span>
					<span className='current-weather__date-text'>15 Jan 2019</span>
				</time>

				<p className='current-weather__city'>Paris, FR</p>

				<span className='current-weather__image'></span>

				<p className='current-weather__temperature'>29°C</p>
				<p className='current-weather__temperature-info'>Sunny</p>
			</div>
		</article>
	);
};

export default CurrentWeather;
