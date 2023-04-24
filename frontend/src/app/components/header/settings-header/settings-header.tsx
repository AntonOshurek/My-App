// components
import { AppNavigation } from '../../navigation';
//styles
import './settings-header.scss';

const SettingsHeader = (): JSX.Element => {
	return (
		<header className='settings-header'>
			<h1 className='settings-header__title'>Settings</h1>
			<AppNavigation />
		</header>
	);
};

export default SettingsHeader;
