//styles
import './weather-days.scss';

const WeatherDays = (): JSX.Element => {
	return (
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
	);
};

export default WeatherDays;
