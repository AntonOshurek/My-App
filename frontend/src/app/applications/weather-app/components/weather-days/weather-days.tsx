//types
import {
	AdaptedDaysDataType,
} from '../../types/weather-adapted-data-types';
//styles
import './weather-days.scss';

//Monday Tuesday Wednesday Thursday Friday Saturday Sunday
//Mon. Tue. Wed. Thu. Fri. Sat. Sun.

interface IWeatherDaysPropsType {
	daysWeather: AdaptedDaysDataType | null,
}

const WeatherDays = ({daysWeather}: IWeatherDaysPropsType): JSX.Element => {

	if(daysWeather) {
		console.log(daysWeather[0]);
	};

	return (
		<>
			<h3 className='visually-hidden'>Weather for three days</h3>
			<ul className='weather-days'>
				<li className='weather-days__item weather-days__item--current'>
					<h4 className='visually-hidden'>Monday</h4>
					<p className='weather-days__days-name'>Mon.</p>
					<p className='weather-days__temperature'>
						29
						<span className='weather-days__temperature-symbol'>°C</span>
					</p>
					<span className='weather-days__image'></span>

					<a className='weather-days__link' href="#">
						<span className='visually-hidden'>Detailed weather for the day</span>
					</a>
				</li>
				<li className='weather-days__item'>
					<h4 className='visually-hidden'>Monday</h4>
					<p className='weather-days__days-name'>Mon.</p>
					<p className='weather-days__temperature'>
						29
						<span className='weather-days__temperature-symbol'>°C</span>
					</p>
					<span className='weather-days__image'></span>

					<a className='weather-days__link' href="#">
						<span className='visually-hidden'>Detailed weather for the day</span>
					</a>
				</li>
				<li className='weather-days__item'>
					<h4 className='visually-hidden'>Monday</h4>
					<p className='weather-days__days-name'>Mon.</p>
					<p className='weather-days__temperature'>
						29
						<span className='weather-days__temperature-symbol'>°C</span>
					</p>
					<span className='weather-days__image'></span>

					<a className='weather-days__link' href="#">
						<span className='visually-hidden'>Detailed weather for the day</span>
					</a>
				</li>
			</ul>
		</>
	);
};

export default WeatherDays;
