//components
import AppNavigation from '../../components/navigation/app-navigation/app-navigation';
import AppSettings from '../../components/settings/app-settings/app-settings';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
	return (
		<>
			<div className='settings-page container'>
				<main className="settings-page__main">
					<h1 className='settings-page__title'>Settings</h1>
					<AppSettings />
				</main>
			</div>

			<AppNavigation />
		</>
	);
};

export default SettingsPage;
