//components
import RootHeader from '../../components/header/root-header/root-header';
//utils

//styles
import './root-page.scss';

const RootPage = (): JSX.Element => {
	return (
		<div className="root-page">
			<main className="root-page__main">
				<RootHeader/>
			</main>
		</div>
	);
}

export default RootPage;
