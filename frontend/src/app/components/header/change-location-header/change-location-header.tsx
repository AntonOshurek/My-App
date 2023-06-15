//components
import { AppNavigation } from '../../navigation';
//styles
import './change-location-header.scss';

const ChangeLocationHeader = (): JSX.Element => {
	return (
		<header>
			<h1 className='visually-hidden'>change location page</h1>
			<AppNavigation />
		</header>
	);
};

export default ChangeLocationHeader;
