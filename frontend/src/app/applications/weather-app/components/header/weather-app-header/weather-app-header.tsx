import { AppNavigation } from '../../../../../components/navigation';
//styles
import './weather-app-header.scss';

const WeatherAppHeader = (): JSX.Element => {
	return (
		<header className='weather-app-header'>
			<h1 className='visually-hidden'>Weather application page</h1>
			<AppNavigation />
		</header>
	);
};

export default WeatherAppHeader;
