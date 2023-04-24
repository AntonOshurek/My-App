//components
import RootHeader from '../../components/header/root-header/root-header';
import AppNavigation from '../../components/navigation/app-navigation/app-navigation';
//styles
import './root-page.scss';

const RootPage = (): JSX.Element => {
	return (
		<>
			<div className="root-page container">
				<RootHeader />

				<main className="root-page__main">

					<section>
						{/* article/information */}
					</section>

				</main>
			</div>

			<AppNavigation />
		</>
	);
}

export default RootPage;
