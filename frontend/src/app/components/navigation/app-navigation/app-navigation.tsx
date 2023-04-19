import { Link } from 'react-router-dom';
import { useState } from 'react';
//variables and consts
import { AppRoute } from '../../../variables/app-routes';
//styles
import './app-navigation.scss';

enum AppNavStatuses {
	OPEN = 'open',
	CLOSE = 'close',
};

const AppNavigation = (): JSX.Element => {
	const [appNavStatus, setAppNavStatus] = useState<AppNavStatuses>(AppNavStatuses.OPEN);

	const onAppNavButtonHandler = () => {
		switch (appNavStatus) {
			case (AppNavStatuses.CLOSE):
				setAppNavStatus(AppNavStatuses.OPEN)
				break;
			case (AppNavStatuses.OPEN):
				setAppNavStatus(AppNavStatuses.CLOSE)
				break;
			default:
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				const _: never = appNavStatus;
				throw new Error('[AppNavigation] onAppNavButtonHandler error')
		};
	};

	return (
		<nav className='app-nav'>
			<ul className='app-nav__list'>
				<li className='app-nav__item'>
					<Link className='app-nav__link' to={'/'}>
						home
					</Link>

				</li>
				<li className='app-nav__item'>
					<Link className='app-nav__link' to={AppRoute.SETTINGS}>
						settings
					</Link>

				</li>

				<li className='app-nav__item'>
					<Link className='app-nav__link' to={''}>
						info
					</Link>

				</li>
			</ul>

		</nav>
	);
};

export default AppNavigation;
