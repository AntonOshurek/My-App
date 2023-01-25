//styles
import './weather-additional.scss';

const WeatherAdditional = (): JSX.Element => {
	return (
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
	);
};

export default WeatherAdditional;
