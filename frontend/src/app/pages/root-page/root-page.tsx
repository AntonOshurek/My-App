//components
import RootHeader from '../../components/header/root-header/root-header';
import { SettingsPage } from '../';
//consts
import { AppTitles } from '../../variables/text';
//styles
import './root-page.scss';
import '../../variables/app-variables.css';
import '../../variables/colors.css';

const RootPage = (): JSX.Element => {
	return (
		<>
			<div className="root-page">
				<RootHeader />
				<main className="root-page__main">


					<SettingsPage />
				</main>
			</div>
		</>
	);
}

export default RootPage;
