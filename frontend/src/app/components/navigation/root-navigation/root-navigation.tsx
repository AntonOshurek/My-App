import './root-navigation.scss';

const RootNavigation = (): JSX.Element => {
	return (
		<nav className='root-navigation'>
			<ul className='root-navigation__list'>
				<li className='root-navigation__item global-glass-button-bg'>
					<a href="#" className='root-navigation__link global-root-nav-item'>
						Weather
					</a>
				</li>
				<li className='root-navigation__item global-glass-button-bg'>
					<a href="#" className='root-navigation__link global-root-nav-item'>
						Movies
					</a>
				</li>
				<li className='root-navigation__item global-glass-button-bg'>
					<a href="#" className='root-navigation__link global-root-nav-item'>
						Converter
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default RootNavigation;
