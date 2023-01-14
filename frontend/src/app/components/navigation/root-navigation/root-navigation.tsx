import './root-navigation.scss';

const RootNavigation = (): JSX.Element => {
	return (
		<nav className='root-navigation'>
			<ul className='root-navigation__list'>
				<li className='root-navigation__item'>
					<a href="#" className='root-navigation__link'>
						Weather
					</a>
				</li>
				<li className='root-navigation__item'>
					<a href="#" className='root-navigation__link'>
						Movies
					</a>
				</li>
				<li className='root-navigation__item'>
					<a href="#" className='root-navigation__link'>
						Converter
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default RootNavigation;
