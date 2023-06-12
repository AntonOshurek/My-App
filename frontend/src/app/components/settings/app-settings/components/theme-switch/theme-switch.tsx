import { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
//store
import { useAppSelector, useAppDispatch } from '../../../../../generic-utils/hooks/hooks';
import { SelectorGetColorThemeState } from '../../../../../store/selectors/app-selectors';
import { setColorThemeAction } from '../../../../../store/actions/app-actions';
//variables
import { ColorThemes } from '../../../../../variables/color-themes';
//styles
import './theme-switch.scss';

const ThemeSwitch = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const actuallyColorTheme = useAppSelector(SelectorGetColorThemeState);

	const [colorTheme, setColorTheme] = useState<ColorThemes>(actuallyColorTheme);

	const themeSwitcherHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setColorTheme(evt.target.value as ColorThemes);//???????????????????????????????????????
	};

	useEffect(() => {
		dispatch(setColorThemeAction({ colorTheme: colorTheme }));
	}, [colorTheme, dispatch]);

	return (
		<form className='theme-switch'>
			<h3 className='theme-switch__title'>Variable Themes</h3>
			<p className='theme-switch__sub-title'>Choice through 2 themes, from darkest to lightest</p>

			<ul className='theme-switch__list'>

				<div className='theme-switch__item theme-switch__item--dark'>

					<input
						className='theme-switch__radio visually-hidden'
						type="radio"
						name='theme'
						value={ColorThemes.THEME_DARK}
						id={ColorThemes.THEME_DARK}
						checked={colorTheme === ColorThemes.THEME_DARK}
						onChange={themeSwitcherHandler}
					/>

					<label className='theme-switch__label' htmlFor={ColorThemes.THEME_DARK}>
						<span className='theme-switch__label-text'>{ColorThemes.THEME_DARK}</span>
						<svg fill="currentColor" aria-hidden='true' focusable='false' viewBox="0 0 24 24" width='24px' height='24px'>
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
								<svg fill="currentColor" aria-hidden='true' focusable='false' viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
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
								<svg fill="currentColor" aria-hidden='true' focusable='false' viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
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

					<input
						className='theme-switch__radio visually-hidden'
						type="radio"
						name='theme'
						value={ColorThemes.THEME_LIGHT}
						id={ColorThemes.THEME_LIGHT}
						checked={colorTheme === ColorThemes.THEME_LIGHT}
						onChange={themeSwitcherHandler}
					/>

					<label className='theme-switch__label' htmlFor={ColorThemes.THEME_LIGHT}>
						<span className='theme-switch__label-text'>{ColorThemes.THEME_LIGHT}</span>
						<svg fill="currentColor" aria-hidden='true' focusable='false' viewBox="0 0 24 24" width='24px' height='24px'><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
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
			</ul>


		</form>
	);
};

export default ThemeSwitch;
