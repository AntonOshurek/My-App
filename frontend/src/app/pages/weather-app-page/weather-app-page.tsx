//components
import WeatherApp from '../../applications/weather-app/weather-app';
//constants
import { AppTitles } from '../../variables/text';
//styles
import './weather-app.page.scss';

const WeatherAppPage = (): JSX.Element => {
	return (
		<div>
			<h1 className='visually-hidden'>{AppTitles.WEATHER_PAGE_TITLE}</h1>
			<main className='weather-app-page'>
				<WeatherApp/>
			</main>
		</div>
	);
};

export default WeatherAppPage;
