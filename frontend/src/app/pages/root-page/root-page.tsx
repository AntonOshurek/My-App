//components
import { RootHeader } from '../../components/header';
import { AppNavigation } from '../../components/navigation';
import { MainAnimationLogo } from '../../components';
//styles
import './root-page.scss';

const RootPage = (): JSX.Element => {
	return (
		<>
			<div className="root-page container">
				<MainAnimationLogo/>
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
