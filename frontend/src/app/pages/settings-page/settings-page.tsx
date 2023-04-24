//components
import { SettingsHeader } from '../../components/header';
import { AppSettings } from '../../components/settings';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
	return (
		<>
			<div className='settings-page container'>
				<SettingsHeader />

				<main className="settings-page__main">
					<AppSettings />
				</main>

			</div>
		</>
	);
};

export default SettingsPage;
