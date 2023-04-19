//components
import AccountSettings from './account-settings/account-settings';
import ThemeSwitch from './theme-switch/theme-switch';
import SettingsButton from '../../controls/settings-button/settings-button';
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
