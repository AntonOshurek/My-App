import { useParams } from 'react-router-dom';
//components
import { CurrentWeather, WeatherControls } from './components/';
//styles
import './weather-app-variables.css';
import './weather-app.scss';

const WeatherApp = (): JSX.Element => {
	const {location, day} = useParams();

	if(location && day) {
		console.log(location);
		console.log(day);
	}

	return (
		<section className='weather-app container'>
			<h2 className='visually-hidden'>Weather</h2>
			<CurrentWeather/>
			<WeatherControls/>
		</section>
	);
};

export default WeatherApp;
