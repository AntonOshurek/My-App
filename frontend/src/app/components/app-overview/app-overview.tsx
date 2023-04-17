import './app-overview.scss';

const AppOverview = (): JSX.Element => {
	return (
		<>
			<section className='app-overview'>
				<h2 className='app-overview__title'>Applications</h2>

				<ul className='app-list'>
					<li className='app-list__item'>
						<h3 className='app-list__title'>Weather</h3>
						<a className='app-list__link' href="#">Link to Weather application</a>

					</li>
					<li className='app-list__item'>
						<h3 className='app-list__title'>Converter</h3>
						<a className='app-list__link' href="#">Link to Weather application</a>

					</li>
				</ul>
			</section>

			<section className='app-settings'>
				<h2 className='app-settings__title'>Settings</h2>

				<form className='theme-switch'>
					<h3 className='theme-switch__title'>Variable Themes</h3>

					<div className='theme-switch__item'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Dark' id='theme-dark' />
						<label className='theme-switch__label' htmlFor='theme-dark'>
							Dark
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'>
								<path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path>
							</svg>
						</label>
					</div>

					<div className='theme-switch__item'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Sunset' id='theme-sunset' />
						<label className='theme-switch__label' htmlFor='theme-sunset'>
							Sunset
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
						</label>
					</div>

					<div className='theme-switch__item'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Sunrise' id='theme-sunrise' />
						<label className='theme-switch__label' htmlFor='theme-sunrise'>
							Sunrise
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
						</label>
					</div>

					<div className='theme-switch__item'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Light' id='theme-light' />
						<label className='theme-switch__label' htmlFor='theme-light'>
							Light
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
						</label>
					</div>

				</form>
			</section>
		</>
	);
};

export default AppOverview;
