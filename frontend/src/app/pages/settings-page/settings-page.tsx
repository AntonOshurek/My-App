//components
import { AppNavigation } from '../../components/navigation';
import { AppSettings } from '../../components/settings';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
	return (
		<>
			<div className='settings-page container'>
				<header className='settings-page__header'>
					<h1 className='settings-page__title'>Settings</h1>
					<AppNavigation />
				</header>

				<main className="settings-page__main">
					<AppSettings />
				</main>

			</div>
		</>
	);
};

export default SettingsPage;
