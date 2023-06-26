//components
import { WeatherAppHeader, WeatherAppWrap } from '../../components/';
//styles
import './weather-app-page.scss';

const WeatherAppPage = (): JSX.Element => {
	return (
		<div className='weather-app-page basic-main-block-styles'>
			<WeatherAppHeader />

			<main className='weather-app-page__main'>

				<WeatherAppWrap/>

			</main>
		</div>
	);
};

export default WeatherAppPage;
