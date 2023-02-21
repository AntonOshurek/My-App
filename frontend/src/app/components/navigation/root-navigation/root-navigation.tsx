import { Link } from 'react-router-dom';
//constans
import { AppRoute } from '../../../variables/app-routes';
//styles
import './root-navigation.scss';

const RootNavigation = (): JSX.Element => {

	return (
		<nav className='root-navigation'>
			<ul className='root-navigation__list'>
				<li className='root-navigation__item root-header__button'>
					<Link to={AppRoute.WEATHER_APP_LINK} className='root-navigation__link global-root-nav-item'>
						Weather
					</Link>
				</li>
				<li className='root-navigation__item root-header__button'>
					<Link to={'/'} className='root-navigation__link global-root-nav-item'>
						Movies
					</Link>
				</li>
				<li className='root-navigation__item root-header__button'>
					<Link to={'/'} className='root-navigation__link global-root-nav-item'>
						Converter
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default RootNavigation;
