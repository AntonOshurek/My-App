//components
import { WeatherAppHeader, WeatherPageWrap } from '../../components/';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	return (
		// <div className='weather-app-page'>
		// <main className='weather-app-page__main'>
		<div className='global-styles__application-page'>
			<WeatherAppHeader />

			<main className='global-styles__application-main'>

				<WeatherPageWrap/>

			</main>
		</div>
	);
};

export default WeatherAppPage;
