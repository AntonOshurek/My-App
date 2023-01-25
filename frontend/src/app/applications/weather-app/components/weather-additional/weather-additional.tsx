//styles
import './weather-additional.scss';

const WeatherAdditional = (): JSX.Element => {
	return (
		<>
			<h3 className='visually-hidden'>Additional information about current day</h3>
			<dl className='weather-additional'>
				<dt className='weather-additional__info-subject'>PRECIPITATION</dt>
				<dd className='weather-additional__info-content'>0 %</dd>

				<dt className='weather-additional__info-subject'>HUMIDITY</dt>
				<dd className='weather-additional__info-content'>34 %</dd>

				<dt className='weather-additional__info-subject'>WIND</dt>
				<dd className='weather-additional__info-content'>0 km/h</dd>
			</dl>
		</>
	);
};

export default WeatherAdditional;
