//components
import { AccountSettings, ThemeSwitch } from './components/';
import { SettingsButton } from '../../controls';
//styles
import './app-settings.scss';

const AppSettings = (): JSX.Element => {
	return (
		<section className='app-settings'>
			<h2 className='app-settings__title'>App settings</h2>

			<ThemeSwitch />

			<AccountSettings />

			<SettingsButton />
		</section>
	);
};

export default AppSettings;
