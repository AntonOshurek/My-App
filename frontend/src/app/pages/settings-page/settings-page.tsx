//components
import AppNavigation from '../../components/navigation/app-navigation/app-navigation';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
	return (
		<>
			<div className='settings-page container'>
				<section className='app-settings'>
					<h2 className='app-settings__title'>App settings</h2>

					<form className='theme-switch'>
						<h3 className='theme-switch__title'>Variable Themes</h3>
						<p className='theme-switch__sub-title'>Choice through 4 themes, from darkest to lightest</p>

						<div className='theme-switch__item theme-switch__item--dark'>
							<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Dark' id='theme-dark' />
							<label className='theme-switch__label' htmlFor='theme-dark'>
								<span className='theme-switch__label-text'>Dark</span>
								<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'>
									<path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path>
								</svg>

								<div className="theme-switch__swatches">
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-bg)' }} title="bg"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-border)' }} title="border"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-surface)' }} title="surface"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-text-primary)' }} title="text-primary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-text-secondary)' }} title="text-secondary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-primary)' }} title="primary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--dark-text-inverse)' }} title="text-inverse"></span>
								</div>
							</label>
						</div>

						{/* <div className='theme-switch__item theme-switch__item--sunset'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Sunset' id='theme-sunset' />
						<label className='theme-switch__label' htmlFor='theme-sunset'>
							<span className='theme-switch__label-text'>Sunset</span>
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
							<div className="theme-switch__swatches">
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-bg)' }} title="bg"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-border)' }} title="border"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-surface)' }} title="surface"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-text-primary)' }} title="text-primary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-text-secondary)' }} title="text-secondary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-primary)' }} title="primary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunset-text-inverse)' }} title="text-inverse"></span>
							</div>
						</label>
					</div> */}

						{/* <div className='theme-switch__item theme-switch__item--sunrise'>
						<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Sunrise' id='theme-sunrise' checked={true} />
						<label className='theme-switch__label' htmlFor='theme-sunrise'>
							<span className='theme-switch__label-text'>Sunrise</span>
							<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
							<div className="theme-switch__swatches">
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-bg)' }} title="bg"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-border)' }} title="border"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-surface)' }} title="surface"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-text-primary)' }} title="text-primary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-text-secondary)' }} title="text-secondary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-primary)' }} title="primary"></span>
								<span className="theme-switch__swatches-item" style={{ background: 'var(--sunrise-text-inverse)' }} title="text-inverse"></span>
							</div>
						</label>
					</div> */}

						<div className='theme-switch__item theme-switch__item--light'>
							<input className='theme-switch__radio visually-hidden' type="radio" name='theme' value='Light' id='theme-light' />
							<label className='theme-switch__label' htmlFor='theme-light'>
								<span className='theme-switch__label-text'>Light</span>
								<svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
								<div className="theme-switch__swatches">
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-bg)' }} title="bg"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-border)' }} title="border"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-surface)' }} title="surface"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-text-primary)' }} title="text-primary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-text-secondary)' }} title="text-secondary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-primary)' }} title="primary"></span>
									<span className="theme-switch__swatches-item" style={{ background: 'var(--light-text-inverse)' }} title="text-inverse"></span>
								</div>
							</label>
						</div>

					</form>

					<form className='account-settings'>
						<h3 className='account-settings__title'>Account settings</h3>
						<p className='account-settings__sub-title'>Settings will be saved after clicking on the "save settings" button</p>
						<div className='account-settings__item'>
							<label className='account-settings__label'>
								Login
								<input className='account-settings__input' type="text" />
							</label>
						</div>

						<div className='account-settings__item'>
							<label className='account-settings__label'>
								City
								<input className='account-settings__input' type="text" />
							</label>
						</div>

						<div className='account-settings__item'>
							<label className='account-settings__label'>
								Language
								<select name="language">
									<option value="eng">English</option>
									<option value="pol">Polish</option>
									<option value="rus">Russian</option>
								</select>
							</label>
						</div>

					</form>

					<button className='app-settings__button' type='button'>Save settings</button>
				</section>
			</div>

			<AppNavigation />
		</>
	);
};

export default SettingsPage;
