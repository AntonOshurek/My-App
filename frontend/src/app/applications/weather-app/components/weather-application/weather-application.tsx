//components
import { WeatherControls, CurrentWeather } from '..';
//styles
import './weather-application.scss';

const WeatherApplication = (): JSX.Element => {
	return (
		<section className='weather-application container application-block-shadows'>
			<h2 className='visually-hidden'>Weather</h2>

			<CurrentWeather/>
			<WeatherControls/>

		</section>
	);
};

export default WeatherApplication;
