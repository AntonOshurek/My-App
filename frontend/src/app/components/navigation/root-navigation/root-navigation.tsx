import { Link, generatePath } from 'react-router-dom';
//constans
import { AppRoute } from '../../../variables/routes';
//types
// import { SetActiveLinkType } from '../../../types/utils-types';
//styles
import './root-navigation.scss';

const RootNavigation = (): JSX.Element => {
	// const activeLinkClass = 'navigation__link--active';
  // const basicLinkClass = 'root-navigation__link global-root-nav-item';

	// const setActiveLink = ({isActive}: SetActiveLinkType) => isActive ? `${basicLinkClass}  ${activeLinkClass}` : `${basicLinkClass}`;


	// generatePath(AppRoute.WEATHER_APP, {location: 'poznan'})

	// `/weather-app/${location ? location + '/' : ''}${defaultWeatherDay ? defaultWeatherDay : ''}`

	const location: string = 'poznan';
	const defaultWeatherDay: string = 'tooday';

	return (
		<nav className='root-navigation'>
			<ul className='root-navigation__list'>
				<li className='root-navigation__item global-glass-button-bg'>
					<Link to={AppRoute.WEATHER_APP} className='root-navigation__link global-root-nav-item'>
						Weather
					</Link>
				</li>
				<li className='root-navigation__item global-glass-button-bg'>
					<Link to={'/'} className='root-navigation__link global-root-nav-item'>
						Movies
					</Link>
				</li>
				<li className='root-navigation__item global-glass-button-bg'>
					<Link to={'/'} className='root-navigation__link global-root-nav-item'>
						Converter
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default RootNavigation;
