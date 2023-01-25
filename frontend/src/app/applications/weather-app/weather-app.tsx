//components
import { CurrentWeather, WeatherControls } from './components/';
//styles
import './weather-app-variables.css';
import './weather-app.scss';

const WeatherApp = (): JSX.Element => {
	return (
		<section className='weather-app container'>
			<h2 className='visually-hidden'>Weather</h2>
			<CurrentWeather/>
			<WeatherControls/>
		</section>
	);
};

export default WeatherApp;
