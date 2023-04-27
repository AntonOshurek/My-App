//components
import { AppNavigation } from '../../../../../components/navigation';
//styles
import './weather-location-header.scss';

const WeatherLocationHeader = (): JSX.Element => {
	return (
		<header>
			<h1 className='visually-hidden'>change location for weather</h1>
			<AppNavigation />
		</header>
	);
};

export default WeatherLocationHeader;
