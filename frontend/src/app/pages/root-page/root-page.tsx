//components
import RootHeader from '../../components/header/root-header/root-header';
import RootWeather from '../../components/weather/root-weather/root-weather';
//utils

//consts
import { AppTitles } from '../../variables/text';
//styles
import './root-page.scss';

const RootPage = (): JSX.Element => {
	return (
		<div className="root-page">
			<RootHeader/>
			<main className="root-page__main">
				<h1 className='visually-hidden'>{AppTitles.ROOT_PAGE_TITLE}</h1>
				<RootWeather/>
			</main>
		</div>
	);
}

export default RootPage;
