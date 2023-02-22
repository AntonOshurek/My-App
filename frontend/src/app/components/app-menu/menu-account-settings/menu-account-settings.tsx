//components
import SettingButton from '../../controls/setting-button/setting-button';
//styles
import './menu-account-settings.scss';

interface IMenuAccountSettingsPropsType {
	returnButtonHandler: () => void
}

// <div className='menu-settings'>  required!!!! for all settings components!
// it is a wraper for all settings
const MenuAccountSettings = ({returnButtonHandler}: IMenuAccountSettingsPropsType): JSX.Element => {

	const saveButtonHandler = () => {
		console.log('save settings')
	};

	return (
		<div className='menu-settings'>

			<form className='menu-account-settings'>
				<label className='menu-account-settings__label'>
					login
					<input className='menu-account-settings__input' type="text" />
				</label>
				<label className='menu-account-settings__label'>
					city
					<input className='menu-account-settings__input' type="text" />
				</label>
				<label className='menu-account-settings__label'>
					language
					<select className='menu-account-settings__select'>
						<option className='menu-account-settings__select-option'>English</option>
						<option className='menu-account-settings__select-option'>Polish</option>
						<option className='menu-account-settings__select-option'>Russian</option>
					</select>
				</label>

				<div className='menu-account-settings__controls'>
					<SettingButton buttonName={'return'} buttonHandler={returnButtonHandler} additionalClass={'menu-account-settings__button'} buttonType={'second'}/>
					<SettingButton buttonName={'save'} buttonHandler={saveButtonHandler} additionalClass={'menu-account-settings__button'}/>
				</div>
			</form>

		</div>
	);
};

export default MenuAccountSettings;
