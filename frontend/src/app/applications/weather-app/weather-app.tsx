import './weather-app.scss';

const WeatherApp = (): JSX.Element => {
	return (
		<section className='weather-app container'>
			<h2 className='visually-hidden'>Weather</h2>

			<article className='current-weather'>
				<h3 className='visually-hidden'>Weather for tooday</h3>

				<time className='current-weather__date' dateTime="2019-01-15 20:00">
					<span className='current-weather__date-text current-weather__date-text--day'>Tuesday</span>
					<span className='current-weather__date-text'>15 Jan 2019</span>
				</time>

				<p className='current-weather__city'>Paris, FR</p>

				<img className='current-weather__image' src="" alt="" />

				<p className='current-weather__temperature'>29°C</p>
				<p className='current-weather__temperature-info'>Sunny</p>

			</article>

			<div className='weather-controls'>
				<article className='weather-additional'>
					<h3 className='visually-hidden'>Additional information about current day</h3>

					<p className='weather-additional__info'>
						<span className='weather-additional__info-subject'>PRECIPITATION</span>
						<span className='weather-additional__info-content'>0 %</span>
					</p>
					<p className='weather-additional__info'>
						<span className='weather-additional__info-subject'>HUMIDITY</span>
						<span className='weather-additional__info-content'>34 %</span>
					</p>
					<p className='weather-additional__info'>
						<span className='weather-additional__info-subject'>WIND</span>
						<span className='weather-additional__info-content'>0 km/h</span>
					</p>
				</article>
			</div>
		</section>
	);
};

export default WeatherApp;
