//components
import RootHeader from '../../components/header/root-header/root-header';
import AppNavigation from '../../components/navigation/app-navigation/app-navigation';
//styles
import './root-page.scss';
import '../../variables/app-variables.css';
import '../../variables/colors.css';

const RootPage = (): JSX.Element => {
	return (
		<>
			<div className="root-page container">
				<RootHeader />
				<main className="root-page__main">

					<AppNavigation />
				</main>
			</div>
		</>
	);
}

export default RootPage;
