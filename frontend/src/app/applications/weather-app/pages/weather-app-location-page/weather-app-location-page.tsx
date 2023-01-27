//components
import { PopularLocaions } from '../../components';
//styles
import './weather-app-location.scss';

const WeatherAppLocationPage = (): JSX.Element => {
	return (
		<div className='weather-app-location-page'>
			<h1 className='visually-hidden'>change location for weather</h1>

			<main className='weather-app-location-page__main'>

				<section className='weather-app-location-page__application container'>
					<h2 className='visually-hidden'>change location</h2>
					<PopularLocaions/>
				</section>

			</main>
		</div>
	);
};

export default WeatherAppLocationPage;