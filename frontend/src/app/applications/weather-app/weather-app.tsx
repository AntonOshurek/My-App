import './weather-app.scss';

const WeatherApp = (): JSX.Element => {
	return (
		<section className='weather-app container'>
			<h2 className='visually-hidden'>Weather</h2>

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

				<ul className='weather-days'>
					<li className='weather-days__item weather-days__item--current'>
						{/* Monday Tuesday Wednesday Thursday Friday Saturday Sunday */}
						{/* Mon. Tue. Wed. Thu. Fri. Sat. Sun. */}
						<h4 className='visually-hidden'>Monday</h4>
						<p className='weather-days__days-name'>Mon.</p>
						<p className='weather-days__temperature'>
							29
							<span className='weather-days__temperature-symbol'>°C</span>
						</p>
						<span className='weather-days__image'></span>

						<a className='weather-days__link' href="#"></a>
					</li>
					<li className='weather-days__item'>
						<h4 className='visually-hidden'>Monday</h4>
						<p className='weather-days__days-name'>Mon.</p>
						<p className='weather-days__temperature'>
							29
							<span className='weather-days__temperature-symbol'>°C</span>
						</p>
						<span className='weather-days__image'></span>

						<a className='weather-days__link' href="#"></a>
					</li>
					<li className='weather-days__item'>
						<h4 className='visually-hidden'>Monday</h4>
						<p className='weather-days__days-name'>Mon.</p>
						<p className='weather-days__temperature'>
							29
							<span className='weather-days__temperature-symbol'>°C</span>
						</p>
						<span className='weather-days__image'></span>

						<a className='weather-days__link' href="#"></a>
					</li>
				</ul>

				<button className='weather-controls__change-location-button' type='button'>Change location</button>
			</div>
		</section>
	);
};

export default WeatherApp;
