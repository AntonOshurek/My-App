import { Link } from 'react-router-dom';
//constans
import { AppRoute } from '../../../variables/app-routes';
//styles
import './root-navigation.scss';

const RootNavigation = (): JSX.Element => {

	return (
		<nav className='root-navigation'>
			<h2 className='root-navigation__title'>Application navigation</h2>

			<ul className='root-navigation__list'>
				<li className='root-navigation__item'>
					<h3 className='root-navigation__title'>Weather</h3>
					<Link className='root-navigation__link' to={AppRoute.WEATHER_APP_LINK}>Link to Weather application</Link>

				</li>
				<li className='root-navigation__item'>
					<h3 className='root-navigation__title'>Converter</h3>
					<Link className='root-navigation__link' to={''}>Link to Weather application</Link>

				</li>
			</ul>
		</nav>
	);
};

export default RootNavigation;
