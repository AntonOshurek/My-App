import './theme-switcher.scss';

const ThemeSwitcher = (): JSX.Element => {
	return (
		<div className="theme-switcher">
			<input className='theme-switcher__input' type="radio" id="light-theme" name="themes"/>
			<label className='theme-switcher__lebel' htmlFor="light-theme">
					Light
			</label>

			<input className='theme-switcher__input' type="radio" id="dark-theme" name="themes" />
			<label className='theme-switcher__lebel' htmlFor="dark-theme">
					Dark
			</label>

			<input className='theme-switcher__input' type="radio" id="auto-theme" name="themes" />
			<label className='theme-switcher__lebel' htmlFor="auto-theme">
					Auto
			</label>

			<span className="slider"></span>
		</div>
	);
};

export default ThemeSwitcher;
