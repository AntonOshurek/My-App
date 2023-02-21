//components
import ThemeSwitcher from '../../theme-switcher/theme-switcher';
//styles
import './menu-settings.scss';

const MenuSettings = (): JSX.Element => {

	return (
		<div className='menu-settings'>
			<div className='menu-settings__header'>
				<ThemeSwitcher/>
			</div>
			<div className='menu-settings__body'>

			</div>
		</div>
	);
};

export default MenuSettings;
