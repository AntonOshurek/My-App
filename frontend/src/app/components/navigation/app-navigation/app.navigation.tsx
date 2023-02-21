import './app-navigation.scss';

const AppNavigation = (): JSX.Element => {
	return (
		<nav className='app-nav'>
			<ul>
				<li>
					home
				</li>
				<li>
					settings
				</li>
			</ul>
		</nav>
	);
};

export default AppNavigation;
