//components
import RootHeader from '../../components/header/root-header/root-header';
import AppNavigation from '../../components/navigation/app-navigation/app.navigation';
//consts
import { AppTitles } from '../../variables/text';
//styles
import './root-page.scss';
import '../../variables/app-variables.css';

const RootPage = (): JSX.Element => {
	return (
		<>
			<div className="root-page">
				<RootHeader/>
				<main className="root-page__main">
					<h1 className='visually-hidden'>{AppTitles.ROOT_PAGE_TITLE}</h1>
				</main>
			</div>

			<AppNavigation/>
		</>
	);
}

export default RootPage;
